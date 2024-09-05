import { modalelement } from '../constants.js';
import getImage from './getImage.js';
import purchaseLogic from '../purchaseLogic.js';
import focusElement from './focusElement.js';

function renderColour(products, colour) {
	const name = colour?.name;
	const priceadd = colour?.price_add;
	const id = colour?.id;

	if (!name || priceadd === undefined || !id) {
		console.error(colour);
		return;
	}

	const buttonscontainer = modalelement.querySelector('.colours-container');
	const modalimg = modalelement.querySelector('.product-img');
	const priceelement = modalelement.querySelector('.product-price');

	const button = document.createElement('button');
	button.addEventListener('click', () => {
		purchaseLogic.changeColour(id);
		focusElement(button, buttonscontainer.querySelectorAll('.colour-button'));
		if (modalelement.style.display === 'grid') {
			let foundproduct = null;

			products.forEach(product => {
				if (modalimg.src.includes(product.name.toLowerCase())) {
					foundproduct = product;
				}
			});

			modalimg.src = getImage(foundproduct.name, colour.name);

			priceelement.innerText = Intl.NumberFormat('nl-NL', {
				style: 'currency', currency: 'EUR',
			}).format(foundproduct.price + colour.price_add);


		}
	});
	button.classList.add('colour-button');
	button.innerText = colour.name;

	buttonscontainer.appendChild(button);
}

export default renderColour;
