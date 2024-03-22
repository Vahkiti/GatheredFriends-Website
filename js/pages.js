//URL Detection
if (window.location.hash == "") {
	Default();
};
if (window.location.hash == "#Home") {
	Home();
};
if (window.location.hash == "#Landing") {
	Landing();
};

// Nav Buttons 
document.getElementById('enter').onclick = function () {
	Home();
}			
document.getElementById('landing').onclick = function () {
	Landing();
	window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#Landing"
}

//Fade Functions
function Default() {
	document.getElementById("header").style.height = "0pc";
	document.getElementById("header").style.maxHeight = "0px";
	document.getElementById("header").style.padding = "0%";
	document.getElementById("navigation").style.paddingTop = "0px";
	document.getElementById("navigation").style.paddingBottom = "0px";
	document.getElementById("navtext").style.fontSize = "0%";
	document.getElementById("splash").style.display = "block";			
	document.getElementById("splash").style.zIndex = "auto";
	window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#Landing"
}

function Home() {								
	document.getElementById("header").style.height = "22vh";
	document.getElementById("header").style.maxHeight = "22vh";
	document.getElementById("header").style.padding = "1%";
	document.getElementById("navigation").style.paddingTop = "5px";
	document.getElementById("navigation").style.paddingBottom = "5px";
	document.getElementById("navtext").style.fontSize = "100%";
	document.getElementById("splash").style.opacity = "0";
	document.getElementById("splash").style.zIndex = "-2";

	setTimeout(function () {
		document.getElementById("splash").style.display = "none";
	}, 500);
}		

function Landing() {
	document.getElementById("header").style.height = "0pc";
	document.getElementById("header").style.maxHeight = "0px";
	document.getElementById("header").style.padding = "0%";
	document.getElementById("navigation").style.paddingTop = "0px";
	document.getElementById("navigation").style.paddingBottom = "0px";
	document.getElementById("navtext").style.fontSize = "0%";
	document.getElementById("splash").style.display = "block";			
	window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#Landing"
	
	setTimeout(function () {
		document.getElementById("splash").style.opacity = "1";
		document.getElementById("splash").style.zIndex = "-2";
	}, 1);
	
	setTimeout(function () {
		document.getElementById("splash").style.zIndex = "auto";
	}, 550);
}