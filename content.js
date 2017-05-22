var item = document.querySelector("body > input");
var alertDetect = document.querySelector(".rc-anchor-alert");
if(item && !alertDetect) { //captcha iframe
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('inject.js');
	(document.body || document.documentElement).appendChild(s);
}