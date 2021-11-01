"use strict"; 

class NewsletterSubscription {

	constructor() {
		this.form = document.getElementById('input-newsletter-subscription');
		this.button = document.getElementById('input-newsletter-subscription__icon');
		this.errors = [];
		this.inputs = {
			email: document.getElementsByName("email")[0],
		};
		this.values ={
			email: "",
		}
		if (this.form && this.inputs) {
			this.init();
			console.log('inint')
		}
	}

	init = () => {
		this.button.addEventListener("click", ( event ) => this.submit( event) );
	}

	validateInputs = () => {
		this.reset();
		for ( let input in this.inputs) {
			this.values[input] = this.inputs[input].value;
			if (this.inputs[input].value === "") this.errors.push(input);
		}
		if (!this.errors.length) {
			return true;
		} else {
			return false;
		}
	}
	
	reset = () => {
		this.errors = [];
		this.removeErrorStyles();
	}

	addErrorStyles = () => {
		this.errors.forEach((name) => {
			const field = document.getElementsByName(name)[0]	
			field.classList.add("input-text__input--error");
		})
	}

	removeErrorStyles = () => {
		for ( let input in this.inputs) {
			this.inputs[input].classList.remove("input-text__input--error")
		}
	}

	sendMessage = async () => {
		const body = JSON.stringify(this.values);
		const data = await fetch("https://mailserver.yellowreach.io/decom/newsletter-subscription", {
			method: "POST", 
			headers: {
				"Content-Type": "application/json",
			},
			body: body
		});

		if (data.status === 200) {
			window.location.href = "/success-newsletter-subscription";
		} else {
			window.location.href = "/error";
		}

	}

	redirect = () => {
		console.log("redirect");
	}

	submit = ( event ) => {
		event.preventDefault();
		const inputIsValid = this.validateInputs();
		if (inputIsValid) {
			console.log('succeess');
			this.sendMessage();
			this.redirect();
		} else {
			this.addErrorStyles();

		}
	}



}

const newsletterSubscriptionInstance = new NewsletterSubscription;