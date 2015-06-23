window.fbAsyncInit = function() {
	FB.init({
		appID : '413405972179727',
		xfbml : true,
		version : 'v2.3'
	});
	FB.ui({
		method : 'share',
		action_type : 'og.likes',
		action_properties : JSON.stringify({
			object : 'https://developers.facebook.com/docs',
		})

	}, function(response){
		//Debugging purposes
		console.log(response);
	});
	FB.getLoginStatus(function(response) {
		if (response.status == 'connected') {
			console.log('Logged in');
		}
		else {
			FB.login();
		}
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js&#xfml=1&appId=<413405972179727>";
	fjs.parentNode.insertBefore(js,fjs);
}(document, 'script', 'facebook-jssdk'));


