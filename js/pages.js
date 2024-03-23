var CurrentPage;
var PrevPage;

//URL Detection
if (window.location.hash == "") {
	CurrentPage = 'splash';
	HidePage();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
	window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#landing"
}
else if (window.location.hash == "#landing") {
	CurrentPage = 'splash';
	HidePage();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
}
else if (window.location.hash == "#home") {
	CurrentPage = 'home';
	HidePage();
	ShowHeader();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
}
else if (window.location.hash == "#about") {
	CurrentPage = 'about';
	HidePage();
	ShrinkHeader();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
}
else if (window.location.hash == "#watch") {
	CurrentPage = 'watch';
	HidePage();
	ShrinkHeader();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
}
else if (window.location.hash == "#read") {
	CurrentPage = 'read';
	HidePage();
	ShrinkHeader();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
}
else if (window.location.hash == "#contact") {
	CurrentPage = 'contact';
	HidePage();
	ShrinkHeader();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
}

console.log("Current Page: " + CurrentPage);
console.log("Previous Page: " + PrevPage);

window.onhashchange = function () {
	console.log("Current Page: " + CurrentPage);
	console.log("Previous Page: " + PrevPage);	

	if (window.location.hash == "") {
		CurrentPage = 'splash';
		FadePage();
		HideHeader();
		window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#landing"
	}
	else if (window.location.hash == "#landing") {
		CurrentPage = 'splash';
		FadePage();
		HideHeader();
	}
	else if (window.location.hash == "#home") {
		CurrentPage = 'home';
		FadePage();
		ShowHeader();
	}
	else if (window.location.hash == "#about") {
		CurrentPage = 'about';
		FadePage();
		ShrinkHeader();
	}
	else if (window.location.hash == "#watch") {
		CurrentPage = 'watch';
		FadePage();
		ShrinkHeader();
	}
	else if (window.location.hash == "#read") {
		CurrentPage = 'read';
		FadePage();
		ShrinkHeader();
	}
	else if (window.location.hash == "#contact") {
		CurrentPage = 'contact';
		FadePage();
		ShrinkHeader();
	}
}

// Nav Buttons
document.getElementById('landingbutton').onclick = function () {
	CurrentPage = 'splash';
	FadePage();
	HideHeader();
	window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#landing"
}
document.getElementById('enterbutton').onclick = function () {
	CurrentPage = 'home';
	FadePage();
	ShowHeader();
}
document.getElementById('homebutton').onclick = function () {
	CurrentPage = 'home';
	FadePage();
	ShowHeader();
}
document.getElementById('aboutbutton').onclick = function () {
	ShrinkHeader();
}
document.getElementById('watchbutton').onclick = function () {
	ShrinkHeader();
}
document.getElementById('readbutton').onclick = function () {
	ShrinkHeader();
}
document.getElementById('contactbutton').onclick = function () {
	ShrinkHeader();
}

//Fade Functions
function HideHeader() {
	document.getElementById("header").style.height = "0pc";
	document.getElementById("header").style.maxHeight = "0px";
	document.getElementById("header").style.padding = "0%";
	document.getElementById("navigation").style.paddingTop = "0px";
	document.getElementById("navigation").style.paddingBottom = "0px";
	document.getElementById("navtext").style.fontSize = "0%";
}

function ShowHeader() {
	document.getElementById("header").style.height = "22vh";
	document.getElementById("header").style.maxHeight = "22vh";
	document.getElementById("header").style.padding = "1%";
	document.getElementById("navigation").style.paddingTop = "5px";
	document.getElementById("navigation").style.paddingBottom = "5px";
	document.getElementById("navtext").style.fontSize = "100%";
}

function ShrinkHeader() {
	document.getElementById("header").style.height = "10vh";
	document.getElementById("header").style.maxHeight = "10vh";
	document.getElementsByClassName("gftext")[0].style.marginTop = "3%";
}

function HidePage() {
	document.getElementById('splash').style.display = "none";
	document.getElementById('home').style.display = "none";
	document.getElementById('about').style.display = "none";
	document.getElementById('watch').style.display = "none";
	document.getElementById('read').style.display = "none";
	document.getElementById('contact').style.display = "none";
}

function FadePage() {
	setTimeout(function () {
		//Fade Out
		document.getElementById(PrevPage).style.opacity = "0";
		document.getElementById(PrevPage).style.zIndex = "-2";
		setTimeout(function () {
			document.getElementById(PrevPage).style.display = "none";
			PrevPage = CurrentPage;
		}, 500);

		//Fade In
		document.getElementById(CurrentPage).style.display = "block";
		setTimeout(function () {
			document.getElementById(CurrentPage).style.opacity = "1";
			document.getElementById(CurrentPage).style.zIndex = "-2";
		}, 1);
		setTimeout(function () {
			document.getElementById(CurrentPage).style.zIndex = "auto";
		}, 550);
	}, 10);
}