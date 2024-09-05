import { modalelement } from '../constants.js';
import getImage from './getImage.js';
import focusElement from './focusElement.js';

function modal(product) {
	const price = product?.price;
	const name = product?.name;

	if (!price || !name) {
		console.error('missing values on modal()');
		return;
	}

	const imgelement = modalelement.querySelector('.product-img');

	const nameelement = modalelement.querySelector('.product-name');

	const priceelement = modalelement.querySelector('.product-price');

	const symbolscontainer = modalelement.querySelector('.symbols-container');
	const colourscontainer = modalelement.querySelector('.colours-container');

	if (!imgelement || !nameelement || !priceelement || !symbolscontainer || !colourscontainer) {
		console.error('missing modal elements, please check modal structure');
		return;
	}

	focusElement(null, modalelement.querySelectorAll('.symbol-button'));
	focusElement(null, modalelement.querySelectorAll('.colour-button'));
	modalelement.style.display = 'grid';

	imgelement.src = getImage(product.name);
	nameelement.innerText = product.name;
	priceelement.innerText = Intl.NumberFormat('nl-NL', {
		style: 'currency', currency: 'EUR',
	}).format(product.price);
}


export default modal;
