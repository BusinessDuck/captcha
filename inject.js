setTimeout(function init() {
    var button = document.querySelector("#recaptcha-audio-button");
    if(!button){
        return setTimeout(init, 1000);
    }
    button.click();
    setTimeout(function () {
        var downloadElement = document.querySelector(".rc-audiochallenge-download-link");
        var request = sendData(downloadElement.href);
        var targetInput = document.querySelector("#audio-response");
        var submitButton = document.querySelector("#recaptcha-verify-button");
        var reloadButton = document.querySelector("#recaptcha-reload-button");
        request.onload = function () {
            targetInput.value = request.response; //todo add property here
            submitButton.click();
            setTimeout(function(){
	            if(targetInput.classList.contains("rc-response-input-field-error")){
		            reloadButton.click();
		            sendToExtension();
	            }
            }, 1000)
        };
    }, 1000);
}, 1000);


function sendData(fileUrl) {
    var formData = new FormData();
    var fileRequest = new XMLHttpRequest();
    var request = new XMLHttpRequest();
    fileRequest.responseType = "blob";
    fileRequest.onload = function () {
        formData.append("file", fileRequest.response);
        request.open("POST", "https://berzhok.info/api.php", true);
        request.send(formData);
    };
    fileRequest.open("GET", fileUrl);
    fileRequest.send();

    return request;
}

function sendToExtension() {
    var message = {
        type: "refresh"
    };
    window.parent.postMessage(message, '*');
}