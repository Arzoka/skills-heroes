import attemptpurchase from './util/attemptpurchase.js';
import { modalelement } from './constants.js';
import focusElement from './util/focusElement.js';

const purchaseLogic = {
	getPurchaseable() {
		return JSON.parse(localStorage.getItem('purchaseable'));
	}, clearPurchaseable() {
		localStorage.setItem('purchaseable', null);
		focusElement(null, modalelement.querySelectorAll('.symbol-button'));
		focusElement(null, modalelement.querySelectorAll('.colour-button'));
		modalelement.querySelector('.product-symbol').src = 'assets/transparent.png';
	}, changeColour(id) {
		localStorage.setItem('purchaseable', JSON.stringify({ ...this.getPurchaseable(), colour: id }));
	}, changesymbol(id) {
		localStorage.setItem('purchaseable', JSON.stringify({ ...this.getPurchaseable(), symbol: id }));
	}, changeproduct(id) {
		localStorage.setItem('purchaseable', JSON.stringify({ ...this.getPurchaseable(), product: id }));
	},

	async purchase() {
		const purchaseable = this.getPurchaseable();
		const productid = purchaseable.product;
		const symbolid = purchaseable.symbol;
		const colourid = purchaseable.colour;

		attemptpurchase(productid, symbolid, colourid).then(result => {
			if (result.success === false) {
				alert(result.error);
				return;
			}

			alert('Success! Your item will arrive somewhere between never and in a thousand years');
			this.clearPurchaseable();
			modalelement.style.display = 'none';
		});
	},
};

export default purchaseLogic;
