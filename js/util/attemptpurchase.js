async function attemptpurchase(productid, symbolid, colourid) {
	const payload = {
		productType: productid, symbol: symbolid, colour: colourid, school: 'mediacollege',
	};

	return fetch('https://skills.canvasaccept.com/orders', {
		body: JSON.stringify(payload), method: 'POST', headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then(result => result.json());

}

export default attemptpurchase;
