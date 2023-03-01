class Visual {

	constructor() {
		this.name = "visual";	
		this.elements = {
			visual: document.getElementById('visual'),
		};
		this.config = {
			type: 'line',
			data: {
				labels: ['01.21', '02.21','03.21','04.21','05.21','06.21','07.21','08.21','09.21','10.21','11.21','12.21'],
				datasets: [{
					label: [],
					animation: false,
					data: [43.99, 1650.32, 3529.28, 5868.25, 8190.76, 10064.29, 11564.27, 13633.42, 16098, 18136.13, 13000, 14300],
					fill: false,
					borderColor: '#2d7eff', 
					tension: 0.1
				}]
			}
		};
		if (this.elements.visual) {
			this.init();
		};
	};

	init = () => {
		this.createVisual();
	};

	createVisual = () => {
		new Chart(this.elements.visual, this.config);
	};

};

const visualInstance = new Visual;