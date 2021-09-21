"use strict";

class Navigation {

	constructor() {
		this.hamburger = document.getElementById("hamburger");
		this.backgroundLayer = document.getElementById('backgroundlayer');
		if (this.hamburger && this.backgroundLayer) {
			this.init();
		}
	}
	
	init = () => {
		this.hamburger.addEventListener("click", this.toggleMenu);
	}

	toggleMenu = () => {
		this.hamburger.classList.toggle('hamburger--active')
		this.backgroundLayer.classList.toggle('navigation-mobile__backgroundlayer--open')
	}

}

const navigationInstance = new Navigation;