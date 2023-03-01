class Visual {

	constructor() {
		this.name = "visual";	
		this.elements = {
			visual: document.getElementById('visual'),
		};
		this.config = {
			type: 'line',
			data: {
				labels: ['01.21', '02.21','03.21','04.21','05.21','06.21','07.21','08.21','09.21','10.21','11.21','12.21', '01.22', '02.22','03.22','04.22','05.22','06.22','07.22','08.22','09.22','10.22','11.22','12.22', '01.23'],
				datasets: [{
					label: [],
					animation: false,
					data: [ 31.51, 1250.96,  2780.49, 4732.57, 6680.68, 8167.33, 9292.91, 10975.18, 13052.88, 14716.61, 16786.19, 18649.86, 20025.72, 21018.71, 21809.21, 22703.31, 23508.06, 23990.31, 24281.68, 24533.27, 24802.9, 24941.87, 25031.9, 25055.68, 25075.75, 25075.75],
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