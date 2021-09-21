"use strict";

class Faq {

	constructor() {
		this.items = [ ...document.getElementsByClassName("card accordion-group__card") ];
		if (this.items) {
			this.init();
		}
	}
	
	init = () => {
		this.addEventListener();
	}

	reset = () => {
		this.items.forEach((item) => {
			item.getElementsByClassName('accordion-group__content')[0].classList.remove('accordion-group__content--open')
			item.getElementsByClassName('accordion-group__carret')[0].classList.remove('accordion-group__carret--inverted')
		})
	}


	addEventListener = () => {
		this.items.forEach((item) => {
			item.addEventListener("click", (event) => this.toggleAccordion(event))
		})
	}

	toggleAccordion = ( event ) => {
		this.reset();
		const target = event.target;
		const clickedCard = target.closest('.card');
		const answer = clickedCard.getElementsByClassName('accordion-group__content')[0];
		answer.classList.toggle("accordion-group__content--open");
		const carret = clickedCard.getElementsByClassName('accordion-group__carret')[0];
		carret.classList.toggle("accordion-group__carret--inverted")
	}

}

const faqInstance = new Faq;


