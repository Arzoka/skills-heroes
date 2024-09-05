import { productswrapper } from '../constants.js';
import getImage from './getImage.js';
import modal from './modal.js';
import purchaseLogic from '../purchaseLogic.js';

function renderElement(product) {
	const wrapper = document.createElement('div');
	wrapper.classList.add('product-container');
	wrapper.id = `product-${ product.id }-wrapper`;
	wrapper.addEventListener('click', () => {
		modal(product);
		purchaseLogic.changeproduct(product.id);
	});

	wrapper.insertAdjacentHTML('afterbegin', `<img src="${ getImage(product.name) }" alt=${ product.name } />
	<figure>
		<span>${ product.name }</span>
		<span>${ product.price }</span>
	</figure>`);

	productswrapper.appendChild(wrapper);
}

export default renderElement;
