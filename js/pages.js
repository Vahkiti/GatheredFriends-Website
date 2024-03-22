var CurrentPage;
var PrevPage;

//URL Detection
if (window.location.hash == "") {
	CurrentPage = 'splash';
	HidePage();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";
	window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#landing"
} 
else if (window.location.hash == "#landing") {
	CurrentPage = 'splash';
	HidePage();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";	
}
else if (window.location.hash == "#Home") {
	CurrentPage = 'homepage';
	HidePage();
	ShowHeader();
	PrevPage = CurrentPage;
	document.getElementById(CurrentPage).style.display = "block";
	document.getElementById(CurrentPage).style.zIndex = "auto";

} 
else if (window.location.hash == "#About") {
	
} 
else if (window.location.hash == "#Watch") {
	
} 
else if (window.location.hash == "#Read") {
	
} 
else if (window.location.hash == "#Contact") {
	
};

// Nav Buttons
document.getElementById('landing').onclick = function () {
	CurrentPage = 'splash';
	FadePage(); 
	HideHeader(); 
	window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#landing"
}
document.getElementById('enter').onclick = function () {
	CurrentPage = 'homepage';
	FadePage(); 
	ShowHeader();
}
document.getElementById('home').onclick = function () {
	CurrentPage = 'homepage'; 
	FadePage(); 
	ShowHeader();
}
document.getElementById('about').onclick = function () {
	
}
document.getElementById('watch').onclick = function () {
	
}
document.getElementById('read').onclick = function () {
	
}
document.getElementById('contact').onclick = function () {
	
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
}

function HidePage() {
	document.getElementById('splash').style.display = "none";
	document.getElementById('home').style.display = "none";
}

function FadePage() {
	setTimeout(function () {
		console.log("Current Page: " + CurrentPage);
		console.log("Previous Page: " + PrevPage); 
		
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