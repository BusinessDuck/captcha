setTimeout(function () {
	var button = document.querySelector("#recaptcha-audio-button");
	button.click();
	setTimeout(function() {
		var downloadElement = document.querySelector(".rc-audiochallenge-download-link");
		console.log(downloadElement.href);
	}, 1000);
	/*
	*
	* Здесь аякс и всякое до парсинга каптчи
	* */
}, 1000);
