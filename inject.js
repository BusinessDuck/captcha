setTimeout(function () {
    var button = document.querySelector("#recaptcha-audio-button");
    button.click();
    setTimeout(function () {
        var downloadElement = document.querySelector(".rc-audiochallenge-download-link");
        var request = sendData(downloadElement.href);
        var targetInput = downloadElement.querySelector("#audio-response");
        var submitButton = downloadElement.querySelector("#recaptcha-verify-button");
        request.onload = function (response) {
            targetInput.value = response.code; //todo add property here
            submitButton.click();
        };
    }, 1000);
}, 1000);


function sendData(fileUrl) {
    var formData = new FormData();
    formData.append("method", "base64");
    formData.append("CapMonsterModule", "ZennoLab.AudioReCaptcha");
    formData.append("ParallelMode", "true");
    formData.append("file", fileUrl);
    // formData.append("imginstructions2", "ZennoLab.AudioReCaptcha");
    formData.append("key", "YOU_KEY_HERE");
    formData.append("method", "post");
    formData.append("phrase", "1");
    formData.append("regsense", "1");
    formData.append("calc", "1");
    formData.append("question", "1");
    formData.append("min_len", "0");
    formData.append("max_len", "0");
    formData.append("language", "0");
    formData.append("numeric", "0");
    formData.append("soft_id", "664");
    formData.append("recaptcha", "0");

    var request = new XMLHttpRequest();
    request.open("POST", "https://178.159.42.197:2145/in.php");
    // request.send(formData);
    return request;
}

function sendToExtension(data) {
    var message = {
        type: "captchaCode",
        code: data
    };
    window.parent.postMessage(message, '*');
}