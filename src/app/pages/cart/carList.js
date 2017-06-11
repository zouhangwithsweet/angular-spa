export default {
	template: require('./carList.html'),
	controllerAs: 'vm',
	controller: Ctrl
}

class Ctrl {
	constructor() {
		console.log('ok');
	}
}