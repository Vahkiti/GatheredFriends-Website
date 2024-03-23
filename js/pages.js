var CurrentPage;

//URL Detection
if (window.location.hash == "") {
	CurrentPage = 'splash';
	ResetPage();
	document.getElementById('splash').style.display = "block";
	window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#landing"
}
else if (window.location.hash == "#landing") {
	CurrentPage = 'splash';
	ResetPage();
	document.getElementById('splash').style.display = "block";
}
else if (window.location.hash == "#home") {
	CurrentPage = 'home';
	ResetPage();
	ShowHeader();
}
else if (window.location.hash == "#about") {
	CurrentPage = 'about';
	ResetPage();
	ShrinkHeader();
}
else if (window.location.hash == "#watch") {
	CurrentPage = 'watch';
	ResetPage();
	ShrinkHeader();
}
else if (window.location.hash == "#read") {
	CurrentPage = 'read';
	ResetPage();
	ShrinkHeader();
}
else if (window.location.hash == "#contact") {
	CurrentPage = 'contact';
	ResetPage();
	ShrinkHeader();
}

window.onhashchange = function () {
	if (window.location.hash == "#landing") {
		FadeOutPage();
		HideHeader();
		CurrentPage = 'splash';
		setTimeout(function () {		
			FadeInPage();
		}, 550);
		document.getElementById("contents").style.overflow = "hidden";
		document.getElementById('splash').style.display = "block";
		window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#landing"
	}
	else if (window.location.hash == "#home") {
	FadeOutPage();
		setTimeout(function () {
			CurrentPage = 'home';
			FadeInPage();
			ShowHeader();
		}, 550);	
	}
	else if (window.location.hash == "#about") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = 'about';
			FadeInPage();
			ShrinkHeader();
		}, 550);	
	}
	else if (window.location.hash == "#watch") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = 'watch';
			FadeInPage();
			ShrinkHeader();
		}, 550);	
	}
	else if (window.location.hash == "#read") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = 'read';
			FadeInPage();
			ShrinkHeader();
		}, 550);	
	}
	else if (window.location.hash == "#contact") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = 'contact';
			FadeInPage();
			ShrinkHeader();
		}, 550);	
	}
}

// Nav Buttons
document.getElementById('landingbutton').onclick = function () {
	FadeOutPage();
	HideHeader();
	CurrentPage = 'splash';
	setTimeout(function () {		
		FadeInPage();
	}, 550);
	document.getElementById("contents").style.overflow = "hidden";
	document.getElementById('splash').style.display = "block";
	window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#landing"
}
document.getElementById('enterbutton').onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = 'home';
		FadeInPage();
		ShowHeader();
	}, 550);	
}
document.getElementById('homebutton').onclick = function () {
	FadeOutPage();
	setTimeout(function () {	
		CurrentPage = 'home';
		FadeInPage();
		ShowHeader();
	}, 550);	
}
document.getElementById('aboutbutton').onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = 'about';
		FadeInPage();
		ShrinkHeader();
	}, 550);	
}
document.getElementById('watchbutton').onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = 'watch';
		FadeInPage();
		ShrinkHeader();
	}, 550);	
}
document.getElementById('readbutton').onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = 'read';
		FadeInPage();
		ShrinkHeader();
	}, 550);	
}
document.getElementById('contactbutton').onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = 'contact';
		FadeInPage();
		ShrinkHeader();
	}, 550);	
}

//Fade Functions
function HideHeader() {
	document.getElementById("header").style.height = "0pc";
	document.getElementById("header").style.maxHeight = "0px";
	document.getElementById("header").style.padding = "0%";
	document.getElementById("navigation").style.paddingTop = "0px";
	document.getElementById("navigation").style.paddingBottom = "0px";
	document.getElementById("navtext").style.fontSize = "0%";
	setTimeout(function () {
		document.getElementById("contents").style.zIndex = "-100";
	}, 500);	
}

function ShowHeader() {
	document.getElementById("header").style.height = "22vh";
	document.getElementById("header").style.maxHeight = "22vh";
	document.getElementById("header").style.padding = "1%";
	document.getElementById("navigation").style.paddingTop = "5px";
	document.getElementById("navigation").style.paddingBottom = "5px";
	document.getElementById("navtext").style.fontSize = "100%";
	document.getElementById("contents").style.height = "65%";
	document.getElementById("contents").style.zIndex = "auto";
	document.getElementById("contents").style.overflow = "scroll";
}

function ShrinkHeader() {
	document.getElementById("header").style.height = "10vh";
	document.getElementById("header").style.maxHeight = "10vh";
	document.getElementById("header").style.padding = "1%";
	document.getElementById("navigation").style.paddingTop = "5px";
	document.getElementById("navigation").style.paddingBottom = "5px";
	document.getElementById("navtext").style.fontSize = "100%";
	document.getElementsByClassName("gftext")[0].style.marginTop = "3%";
	document.getElementById("contents").style.height = "77%";
}

function ResetPage() {
	if (CurrentPage != "splash") {
		document.getElementById('splash').style.display = "none";
		document.getElementById('splash').style.opacity = "0";
	}
	if (CurrentPage != "home") {
		document.getElementById('home').style.display = "none";
		document.getElementById('home').style.opacity = "0";
	}
	if (CurrentPage != "about") {
		document.getElementById('about').style.display = "none";
		document.getElementById('about').style.opacity = "0";
	}
	if (CurrentPage != "watch") {
		document.getElementById('watch').style.display = "none";
		document.getElementById('watch').style.opacity = "0";
	}
	if (CurrentPage != "read") {
		document.getElementById('read').style.display = "none";
		document.getElementById('read').style.opacity = "0";
	}
	if (CurrentPage != "contact") {
		document.getElementById('contact').style.display = "none";
		document.getElementById('contact').style.opacity = "0";
	}
	
	document.getElementById(CurrentPage).style.display = "flex";
	document.getElementById(CurrentPage).style.opacity = "1";
	document.getElementById(CurrentPage).style.zIndex = "auto";
	document.getElementById('header').style.zIndex = "20";
}

function FadeOutPage() {
	document.getElementById(CurrentPage).style.opacity = "0";
	document.getElementById(CurrentPage).style.zIndex = "-2";
	setTimeout(function () {
		document.getElementById(CurrentPage).style.display = "none";
	}, 500);
}

function FadeInPage() {
	if (CurrentPage != "splash") {
		document.getElementById(CurrentPage).style.display = "flex";
	}
	else {
		document.getElementById('splash').style.display = "block";
	}
	setTimeout(function () {
		document.getElementById(CurrentPage).style.opacity = "1";
		setTimeout(function () {
			document.getElementById(CurrentPage).style.zIndex = "auto";
			document.getElementById('header').style.zIndex = "20";
		}, 550);
	}, 10);	
}