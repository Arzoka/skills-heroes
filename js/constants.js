const dataset = {
	async get() {
		return await fetch('../assets/dataset.json').then(result => result.json());
	},
};

const modalelement = document.getElementById('modal');
const closebutton = document.getElementById('close-button');
const productswrapper = document.getElementById('products-wrapper');
const purchasebutton = document.getElementById('purchase-button');

export {
	dataset, productswrapper, modalelement, closebutton, purchasebutton,
};
