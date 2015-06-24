function statusChangeCallback(response) {

	console.log('statusChangeCallback');
	console.log(response);

	if (response.status === 'connected') {
		window.location.href = "swingmain.html"
		showPicture();
	} else if (response.status === 'not_authorized') {

		document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook';
	} else {

		document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook';
	}
}

function checkLoginState() {
	FB.getLoginStatus(function(response) {

		statusChangeCallback(response);
	});
}

window.fbAsyncInit = function() {
	FB.init({
		appId : '413405972179727',
		cookie : true,
		xfbml : true,
		version : 'v2.2'
	});

	FB.getLoginStatus(function(response) {

		statusChangeCallback(response);
	});
};

(function(d, s, id) {

	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function showPicture() {
	console.log('Welcome. Fetching your information...');
	FB.api('/me', function(response) {

		console.log('Successful login for', response.name);
		console.log(response);
		document.getElementById('status').innerHTML = 'Thank you for loggin in ' + response.name + '!';
		// document.getElementById('status').innerHTML = ('<img src=' + response.picture.data.url + '> ' + response.name);

	});
}

