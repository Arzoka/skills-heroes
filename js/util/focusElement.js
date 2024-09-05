function focusElement(focuselement, unfocuselemenents) {
	unfocuselemenents.forEach(element => {
		element.style.border = 'none';
	});

	if (focuselement !== null) {
		focuselement.style.border = '1px solid #fff';
	}


}

export default focusElement;
