var item = document.querySelector("body > input");
var alertDetect = document.querySelector(".rc-anchor-alert");
if (item && !alertDetect) { //captcha iframe
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('inject.js');
	(document.body || document.documentElement).appendChild(s);
}

var input = document.querySelector("#ask_address");
if (input) {
	input.value = "xrb_33csxso3mj18kf39gnpstqi6rwtdwzuj884fcw8yw971dq3ss7iyz86eohj3";
}

window.addEventListener("message", function (message) {
	if (message.data.type !== "refresh") {
		return;
	}
	location.reload();
}, false);

window.onerror = function() {
	location.reload();
};