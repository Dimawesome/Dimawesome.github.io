$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var screenMax = $(document).height() - $(window).height();

//onscroll effect
window.onscroll = function() {
	myFunction1(),
	myFunction2(),
	myFunction3(),
	myFunction4()
};

// 370
function myFunction1() {
  if (document.body.scrollTop > screenMax * 0.1 || document.documentElement.scrollTop > screenMax * 0.1) {
    document.getElementById("f-article").className = "slideUp1";
	document.getElementById("s-article").className = "slideUp2";
	document.getElementById("t-article").className = "slideUp1";
  } else {
	document.getElementById("f-article").className = "";
	document.getElementById("s-article").className = "";
	document.getElementById("t-article").className = "";
  }
}

// 650 2400
function myFunction2() {
	if(document.body.scrollTop > screenMax * 0.23 || document.documentElement.scrollTop > screenMax * 0.23){
		document.getElementById("bg").style.visibility = "hidden";
		document.getElementById("bg2").style.visibility = "visible";
		document.getElementById("bg3").style.visibility = "hidden";
	}
	else {
		document.getElementById("bg").style.visibility = "visible";
		document.getElementById("bg2").style.visibility = "hidden";
		document.getElementById("bg3").style.visibility = "hidden";
	}
	if (document.body.scrollTop > screenMax * 0.8 || document.documentElement.scrollTop > screenMax * 0.8 
	) {
		document.getElementById("bg").style.visibility = "hidden";
		document.getElementById("bg2").style.visibility = "hidden";
		document.getElementById("bg3").style.visibility = "visible";
	}
}

// 400
function myFunction3(){
	if (document.body.scrollTop > screenMax * 0.1 || document.documentElement.scrollTop > screenMax * 0.1) {
		document.getElementById("sticky").style.visibility = "visible";
	} else {
		document.getElementById("sticky").style.visibility = "hidden";
	}
}

// 2600 0.74
function myFunction4() {
	
	if (document.body.scrollTop > screenMax * 0.9 || document.documentElement.scrollTop > screenMax * 0.9) {
		document.getElementById("footer-contacts").className = "slideUp1";
		// document.getElementById("social-net").className = "slideUp1";
	} else {
		document.getElementById("footer-contacts").className = "";
		// document.getElementById("social-net").className = "";
	}
}

lightbox.option({
	'resizeDuration': 600,
	'alwaysShowNavOnTouchDevices': true,
	'showImageNumberLabel': true,
	'disableScrolling': true
})

//interactive window

$(document).ready(function(){
  $(".i-window").click(function(){
	$("#myModal").modal();
  });
});


// scroll to top button
function scrollToTop() {
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
}

AOS.init();