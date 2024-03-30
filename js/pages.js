var CurrentPage;

//URL Detection
if (window.location.hash == "") {
	CurrentPage = "splash";
	ResetPage();
	ClearAll();
	document.getElementById("splash").style.display = "block";
	window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, "") + "#landing"
	document.title = "Gathered Friends: A BIONICLE Book Club Podcast";
}
else if (window.location.hash == "#landing") {
	CurrentPage = "splash";
	ResetPage();
	ClearAll();
	document.getElementById("splash").style.display = "block";
	document.title = "Gathered Friends: A BIONICLE Book Club Podcast";
}
else if (window.location.hash == "#home") {
	CurrentPage = "home";
	ResetPage();
	ClearAll();
	ShowHeader();
	document.title = "Gathered Friends - Home";
	document.querySelector('meta[property="og:title"]').setAttribute("content", "Home");
	document.querySelector('meta[name="twitter:title"]').setAttribute("content", "Home");
}
else if (window.location.hash == "#about") {
	CurrentPage = "about";
	ResetPage();
	ClearAll();
	ShrinkHeader();
	document.title = "Gathered Friends - About"
}
else if (window.location.hash == "#watch") {
	CurrentPage = "watch";
	ResetPage();
	ClearAll();
	ShrinkHeader();
	document.title = "Gathered Friends - Watch";
}
else if (window.location.hash == "#read") {
	CurrentPage = "read";
	ResetPage();
	ClearAll();
	ShrinkHeader();
	document.title = "Gathered Friends - Read";
}
else if (window.location.hash == "#contact") {
	CurrentPage = "contact";
	ResetPage();
	ClearAll();
	ShrinkHeader();
	document.title = "Gathered Friends - Contact";
}

window.onhashchange = function () {
	if (window.location.hash == "#landing") {
		if (CurrentPage != "splash") {
			FadeOutPage();
			HideHeader();
			CurrentPage = "splash";
			setTimeout(function () {		
				FadeInPage();
			}, 550);
			document.getElementById("contents").style.overflow = "hidden";
			document.getElementById("splash").style.display = "block";
			window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, "") + "#landing"			
		}
		document.title = "Gathered Friends: A BIONICLE Book Club Podcast";
	}
	else if (window.location.hash == "#home") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = "home";
			FadeInPage();
			ShowHeader();
			document.title = "Gathered Friends - Home";
		}, 550);	
	}
	else if (window.location.hash == "#about") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = "about";
			FadeInPage();
			ShrinkHeader();
			document.title = "Gathered Friends - About";
		}, 550);	
	}
	else if (window.location.hash == "#watch") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = "watch";
			FadeInPage();
			ShrinkHeader();
			document.title = "Gathered Friends - Watch";
		}, 550);	
	}
	else if (window.location.hash == "#read") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = "read";
			FadeInPage();
			ShrinkHeader();
			document.title = "Gathered Friends - Read";
		}, 550);	
	}
	else if (window.location.hash == "#contact") {
		FadeOutPage();
		setTimeout(function () {
			CurrentPage = "contact";
			FadeInPage();
			ShrinkHeader();
			document.title = "Gathered Friends - Contact";
		}, 550);	
	}
}

// Nav Buttons
document.getElementById("landingbutton").onclick = function () {
	FadeOutPage();
	HideHeader();
	CurrentPage = "splash";
	setTimeout(function () {		
		FadeInPage();
	}, 550);
	document.getElementById("contents").style.overflow = "hidden";
	document.getElementById("splash").style.display = "block";
	document.getElementById("splash").style.zIndex = "-2";
	window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, "") + "#landing"
}
document.getElementById("enterbutton").onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = "home";
		FadeInPage();
		ShowHeader();
	}, 550);	
}
document.getElementById("homebutton").onclick = function () {
	FadeOutPage();
	setTimeout(function () {	
		CurrentPage = "home";
		FadeInPage();
		ShowHeader();
	}, 550);	
}
document.getElementById("aboutbutton").onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = "about";
		FadeInPage();
		ShrinkHeader();
	}, 550);	
}
document.getElementById("watchbutton").onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = "watch";
		FadeInPage();
		ShrinkHeader();
	}, 550);	
}
document.getElementById("readbutton").onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = "read";
		FadeInPage();
		ShrinkHeader();
	}, 550);	
}
document.getElementById("contactbutton").onclick = function () {
	FadeOutPage();
	setTimeout(function () {
		CurrentPage = "contact";
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
	if (CurrentPage != "contact") {
		document.getElementById("contents").style.overflow = "scroll";
	}
	else {
		document.getElementById("contents").style.overflow = "hidden";
	}
}

function ResetPage() {
	if (CurrentPage != "splash") {
		document.getElementById("splash").style.display = "none";
		document.getElementById("splash").style.opacity = "0";
		document.getElementById("splash").style.width = "0%";
	}
	if (CurrentPage != "home") {
		document.getElementById("home").style.display = "none";
		document.getElementById("home").style.opacity = "0";
		document.getElementById("home").style.width = "0%";
	}
	if (CurrentPage != "about") {
		document.getElementById("about").style.display = "none";
		document.getElementById("about").style.opacity = "0";
		document.getElementById("about").style.width = "0%";
	}
	if (CurrentPage != "watch") {
		document.getElementById("watch").style.setProperty("display", "none", "important")
		document.getElementById("watch").style.opacity = "0";
		document.getElementById("watch").style.setProperty("width", "0%", "important")
	}
	if (CurrentPage != "read") {
		document.getElementById("read").style.display = "none";
		document.getElementById("read").style.opacity = "0";
		document.getElementById("read").style.width = "0%";
	}
	if (CurrentPage != "contact") {
		document.getElementById("contact").style.display = "none";
		document.getElementById("contact").style.opacity = "0";
		document.getElementById("contact").style.width = "0%";
	}
}

function ClearAll() {
	document.getElementById(CurrentPage).style.display = "flex";
	document.getElementById(CurrentPage).style.opacity = "1";
	document.getElementById(CurrentPage).style.zIndex = "auto";
	document.getElementById(CurrentPage).style.width = "100vw";
	document.getElementById("header").style.zIndex = "20";
}

function FadeOutPage() {
	document.getElementById(CurrentPage).style.opacity = "0";
	document.getElementById(CurrentPage).style.zIndex = "-2";
	document.getElementById(CurrentPage).style.transition = "opacity 0.5s";
	document.getElementById("contents").style.width = "auto";
	document.getElementById("contents").style.overflow = "hidden";
	setTimeout(function () {
		ResetPage();
		document.getElementById(CurrentPage).style.width = "0%";
		document.getElementById(CurrentPage).style.display = "none";
		document.getElementById(CurrentPage).style.transition = "0s";
	}, 500);
}

function FadeInPage() {
	if (CurrentPage != "splash") {
		document.getElementById(CurrentPage).style.display = "flex";
		document.getElementById("contents").style.display = "flex";
	}
	else {
		document.getElementById("splash").style.display = "block";
		document.getElementById("contents").style.display = "none";
	}
	document.getElementById(CurrentPage).style.transition = "opacity 0.5s";
	document.getElementById(CurrentPage).style.width = "100vw";
	document.getElementById("contents").style.width = "100vw";
	setTimeout(function () {
		document.getElementById(CurrentPage).style.opacity = "1";
		setTimeout(function () {
			document.getElementById(CurrentPage).style.zIndex = "auto";
			document.getElementById("header").style.zIndex = "20";			
			if (CurrentPage != "contact") {
			document.getElementById("contents").style.overflow = "scroll";
			}
			else {
				document.getElementById("contents").style.overflow = "hidden";
			}
			document.getElementById(CurrentPage).style.transition = "0s";
		}, 550);
	}, 30);	
}