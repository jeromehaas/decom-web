class CookieBanner {

	constructor() {
		this.name = 'cookie-banner',
		this.elements = {
			banner: document.querySelector('.cookie-banner'),
			button: document.querySelector('.cookie-banner__button')
		};
        this.cookie = {
			name: 'cookie-agreement',
			value: 'accepted',
			expirationDays: 7
		};
		this.init();
	};

	init() {
		if (!document.querySelector(`.js-${this.name}`)) return;
		this.addEventListeners();
		setTimeout(() => this.checkCookie(), 1000);
	};
	
	addEventListeners() {
		this.elements.button.addEventListener('click', () => {
			this.setCookie();
			this.hideBanner();
		});
	};

	showBanner() {
		this.elements.banner.classList.add('cookie-banner--visible');
	};
	
	hideBanner() {
		this.elements.banner.classList.remove('cookie-banner--visible');
	};

	checkCookie() {
		const cookies = document.cookie.split('; ');
		setTimeout(() => {
			if (!cookies.includes(`${this.cookie.name}=${this.cookie.value}`)) this.showBanner();
		}, 5000);
	};
	
	setCookie() {
		let date = new Date();
		date.setDate(new Date().getDate() + this.cookie.expirationDays)
		date = date.toUTCString();
		document.cookie = `${this.cookie.name}=${this.cookie.value}; expires=${date}`;
		this.hideBanner();
	};

};

const cookieBannerInstance = new CookieBanner;