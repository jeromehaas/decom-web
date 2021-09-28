"use strict";

class Navigation {

	constructor() {
		this.hamburger = document.getElementById("hamburger");
		this.backgroundLayer = document.getElementById('backgroundlayer');
		this.aboutLink = document.getElementsByClassName('navigation-mobile__link--has-childs')[0];
		this.aboutLinkSublinkBox = document.getElementsByClassName('navigation-mobile__sublink-box')[0];
		if (this.hamburger && this.backgroundLayer) {
			this.init();
		}
	}
	
	init = () => {
		this.hamburger.addEventListener("click", this.toggleMenu);
		this.aboutLink.addEventListener("click", (event) => this.showMobileSublinks(event));
	}

	toggleMenu = () => {
		this.hamburger.classList.toggle('hamburger--active');
		this.backgroundLayer.classList.toggle('navigation-mobile__backgroundlayer--open')
	}

	showMobileSublinks = (event) => {
		event.preventDefault();
		this.aboutLinkSublinkBox.classList.toggle('navigation-mobile__sublink-box--open');
	}

}

const navigationInstance = new Navigation;