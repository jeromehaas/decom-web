"use strict";

class Navigation {

	constructor() {
		this.hamburger = document.getElementById("hamburger");
		this.backgroundLayer = document.getElementById('backgroundlayer');
		this.offerLink = document.getElementsByClassName('navigation-mobile__link--has-childs')[0];
		this.aboutLink = document.getElementsByClassName('navigation-mobile__link--has-childs')[1];
		this.loginLink = document.getElementsByClassName('navigation-mobile__link--has-childs')[2];
		this.offerLinkSublinkBox = document.getElementsByClassName('navigation-mobile__sublink-box')[0];
		this.aboutLinkSublinkBox = document.getElementsByClassName('navigation-mobile__sublink-box')[1];
		this.loginLinkSublinkBox = document.getElementsByClassName('navigation-mobile__sublink-box')[2];
		if (this.hamburger && this.backgroundLayer) {
			this.init();
		}
	}
	
	init = () => {
		this.hamburger.addEventListener("click", this.toggleMenu);
		this.offerLink.addEventListener("click", (event) => this.showOfferSublinks(event));
		this.aboutLink.addEventListener("click", (event) => this.showAboutSublinks(event));
		this.loginLink.addEventListener("click", (event) => this.showLoginSublinks(event));
	}

	toggleMenu = () => {
		this.hamburger.classList.toggle('hamburger--active');
		this.backgroundLayer.classList.toggle('navigation-mobile__backgroundlayer--open')
	}

	showAboutSublinks = (event) => {
		event.preventDefault();
		this.aboutLinkSublinkBox.classList.toggle('navigation-mobile__sublink-box--open');
	}

	showOfferSublinks = (event) => {
		event.preventDefault();
		this.offerLinkSublinkBox.classList.toggle('navigation-mobile__sublink-box--open');
	}

	showLoginSublinks = (event) => {
		event.preventDefault();
		this.loginLinkSublinkBox.classList.toggle('navigation-mobile__sublink-box--open');
	}

}

const navigationInstance = new Navigation;