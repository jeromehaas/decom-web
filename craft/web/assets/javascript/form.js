"use strict"; 

class Form {

	constructor() {
		this.form = document.getElementById('form');
		this.button = document.getElementsByClassName('form__button')[0];
		this.errors = [];
		this.inputs = {
			firstname: document.getElementsByName("firstname")[0],
			lastname: document.getElementsByName("lastname")[0],
			company: document.getElementsByName("company")[0],
			email: document.getElementsByName("email")[0],
			phone: document.getElementsByName("phone")[0]
		};
		this.values ={
			firstname: "",
			lastname: "",
			company: "",
			email: "",
			phone: ""
		}
		this.init();
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
		const data = await fetch("https://mailserver.yellowreach.io/decom/request-informations", {
			method: "POST", 
			headers: {
				"Content-Type": "application/json",
			},
			body: body
		});

		if (data.status === 200) {
			window.location.href = "https://decom.ch/success.html";
		} else {
			window.location.href = "https://decom.ch/error.html";
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

const formInstance = new Form;