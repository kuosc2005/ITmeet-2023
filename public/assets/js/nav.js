

function menuScrollEffect () {

	if (window.location.pathname != "/") {

		document.querySelectorAll('#menu > ul > li:nth-child(1)')[0].classList.add("active");
		document.getElementsByClassName("main-header")[0].style.backgroundColor = 'color-mix(in srgb, var(--fourth-color), transparent 0%)';
		document.getElementByClassName("main-header")[0].style.marginTop = '0px';
		document.getElementById("scrollUp").style.display = 'none';

	}
	else {
		document.querySelectorAll('#menu > ul > li:nth-child(1)')[0].classList.add("active");
		document.getElementsByClassName("main-header")[0].style.marginTop = '30px';
		document.getElementById("scrollUp").style.display = 'none';
		window.onscroll =  (scroll) => {
			var scroll = window.scrollY;
			if (scroll < 200) {
				document.getElementsByClassName("main-header")[0].style.backgroundColor = 'color-mix(in srgb, var(--fourth-color), transparent 100%)';
				document.getElementsByClassName("main-header")[0].style.marginTop = '30px';
			} else {
				document.getElementsByClassName("main-header")[0].style.backgroundColor = 'color-mix(in srgb, var(--fourth-color), transparent 0%)';
				document.getElementsByClassName("main-header")[0].style.marginTop = '0px';
			}
		
		
			if (scroll < 500) {
				document.getElementById("scrollUp").style.display = 'none';
			} else {
				document.getElementById("scrollUp").style.display = 'block';
			}
		};

		
	}
}

window.onload = menuScrollEffect;

