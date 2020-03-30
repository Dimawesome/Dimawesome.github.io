$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


// Scroll to specific values
// scrollTo is the same
/* window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
}); */

// Scroll to a certain element
/* document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
}); */


$(document).ready(function(){
  $(".i-window").click(function(){
	$("#myModal").modal();
  });
});

lightbox.option({
	'resizeDuration': 600,
	'alwaysShowNavOnTouchDevices': true,
	'showImageNumberLabel': true,
	'disableScrolling': true
})

var screenMax = $(document).height() - $(window).height();

//onscroll effect
window.onscroll = function() {
	myFunction1(),
	myFunction2(),
	myFunction3()
};


// 650 2400
function myFunction1() {
	if(document.body.scrollTop > screenMax * 0.18 || document.documentElement.scrollTop > screenMax * 0.18){
		document.getElementById("bg").style.visibility = "hidden";
		document.getElementById("bg2").style.visibility = "visible";
		document.getElementById("bg3").style.visibility = "hidden";
	}
	else {
		document.getElementById("bg").style.visibility = "visible";
		document.getElementById("bg2").style.visibility = "hidden";
		document.getElementById("bg3").style.visibility = "hidden";
	}
	if (document.body.scrollTop > screenMax * 0.85 || document.documentElement.scrollTop > screenMax * 0.85 
	) {
		document.getElementById("bg").style.visibility = "hidden";
		document.getElementById("bg2").style.visibility = "hidden";
		document.getElementById("bg3").style.visibility = "visible";
	}
}
// 400
function myFunction2(){
	if (document.body.scrollTop > screenMax * 0.1 || document.documentElement.scrollTop > screenMax * 0.1) {
		document.getElementById("sticky").style.visibility = "visible";
	} else {
		document.getElementById("sticky").style.visibility = "hidden";
	}
}

// 2600
function myFunction3() {
	
	if (document.body.scrollTop > screenMax * 0.9 || document.documentElement.scrollTop > screenMax * 0.9) {
		document.getElementById("footer-contacts").className = "slideUp1";
		// document.getElementById("social-net").className = "slideUp1";
	} else {
		document.getElementById("footer-contacts").className = "";
		// document.getElementById("social-net").className = "";
	}
}

// scroll to top button
function scrollToTop() {
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
}

AOS.init();