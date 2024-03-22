var landing;
var home;
var about;
var watch;
var read;
var contact;

//URL Detection
if (window.location.hash == "") {Default();} 
else if (window.location.hash == "#Landing") {Landing();}
else if (window.location.hash == "#Home") {Home();} 
else if (window.location.hash == "#About") {About();} 
else if (window.location.hash == "#Watch") {Watch();} 
else if (window.location.hash == "#Read") {Read();} 
else if (window.location.hash == "#Contact") {Contact();};

// Nav Buttons
document.getElementById('landing').onclick = function () {Landing(); window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#Landing"}
document.getElementById('enter').onclick = function () {Home();}
document.getElementById('home').onclick = function () {Home();}
document.getElementById('about').onclick = function () {About();}
document.getElementById('watch').onclick = function () {Watch();}
document.getElementById('read').onclick = function () {Read();}
document.getElementById('contact').onclick = function () {Contact();}

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

function HidePages() {
	if (landing == 0) {
		document.getElementById("splash").style.opacity = "0";
		document.getElementById("splash").style.zIndex = "-2";	
		setTimeout(function () {
			document.getElementById("splash").style.display = "none";
		}, 500);
	}
	else if (home == 0) {
		
	}
	else if (about == 0) {
		
	}
	else if (watch == 0) {
		
	}
	else if (read == 0) {
		
	}
	else if (contact == 0) {
		
	}
}

//Page Contents
function Default() {
	landing = 1;
	home = 0;
	about = 0;
	watch = 0;
	read = 0;
	contact = 0;
	HideHeader();
	
	document.getElementById("splash").style.display = "block";
	document.getElementById("splash").style.zIndex = "auto";
	window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#Landing"
}	

function Landing() {
	landing = 1;
	home = 0;
	about = 0;
	watch = 0;
	read = 0;
	contact = 0;	
	HideHeader();
	HidePages();
	
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

function Home() {
	landing = 0;
	home = 1;
	about = 0;
	watch = 0;
	read = 0;
	contact = 0;	
	ShowHeader();
	HidePages();
}

function About() {
	landing = 0;
	home = 0;
	about = 1;
	watch = 0;
	read = 0;
	contact = 0;	
	ShrinkHeader();
	HidePages();
}

function Watch() {
	landing = 0;
	home = 0;
	about = 0;
	watch = 1;
	read = 0;
	contact = 0;	
	ShrinkHeader();
	HidePages();
}

function Read() {
	landing = 0;
	home = 0;
	about = 0;
	watch = 0;
	read = 1;
	contact = 0;
	ShrinkHeader();
	HidePages();
}

function Contact() {
	landing = 0;
	home = 0;
	about = 0;
	watch = 0;
	read = 0;
	contact = 1;
	ShrinkHeader();
	HidePages();
}