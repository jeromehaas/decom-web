class Visual {

	constructor() {
		this.name = "visual";	
		this.elements = {
			visual: document.getElementById('visual'),
		};
		this.config = {
			type: 'line',
			data: {
				labels: ['01.23', '02.23','03.23','04.23','05.23','06.23','07.23','08.23','09.23','10.23','11.23','12.23'],
				datasets: [{
					label: [],
					animation: false,
					scaleLabel: {
						fontColor: 'red',
						labelString: 'hello world'
					},
					data: [0,1300, 2600, 3900, 5200, 6500, 7800, 9100, 10400, 11700, 13000, 14300],
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