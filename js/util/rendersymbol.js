import { modalelement } from '../constants.js';
import purchaseLogic from '../purchaseLogic.js';
import focusElement from './focusElement.js';

function renderSymbol(symbol) {
	const name = symbol?.name;
	const id = symbol?.id;

	if (!name || id === undefined) {
		console.error(symbol);
		return;
	}

	const symbolscontainer = modalelement.querySelector('.symbols-container');
	const productsymbol = modalelement.querySelector('.product-symbol');

	const button = document.createElement('button');

	button.addEventListener('click', () => {
		focusElement(button, symbolscontainer.querySelectorAll('.symbol-button'));
		purchaseLogic.changesymbol(id);
		if (modalelement.style.display === 'grid') {
			let foundproduct = null;

			productsymbol.src = `../assets/Media-assets/symbols/symbol-${ name }.png`;


		}
	});
	button.classList.add('symbol-button');
	button.innerHTML = `<img src="../assets/Media-assets/symbols/symbol-${ name }.png" alt="${ name }" />`;

	symbolscontainer.appendChild(button);
}

export default renderSymbol;
