import { closebutton, dataset, modalelement, purchasebutton } from './constants.js';
import renderElement from './util/renderproduct.js';
import renderColour from './util/rendercolour.js';
import renderSymbol from './util/rendersymbol.js';
import purchaseLogic from './purchaseLogic.js';

purchaseLogic.clearPurchaseable();

dataset.get().then(data => {
	const products = data?.products;
	const colours = data?.colours;
	const symbols = data?.symbols;

	if (!products || !colours || !symbols) {
		console.error('dataset error, some data might not be found');
		return;
	}

	products.forEach(product => {
		renderElement(product);
	});

	colours.forEach(colour => {
		renderColour(products, colour);
	});

	symbols.forEach(symbol => {
		renderSymbol(symbol);
	});
});

closebutton.addEventListener('click', () => {
	modalelement.style.display = 'none';
	purchaseLogic.clearPurchaseable();
});

purchasebutton.addEventListener('click', () => {
	purchaseLogic.purchase();
});
