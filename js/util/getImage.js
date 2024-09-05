function getImage(name, colour) {
	if (!colour) {
		return `../assets/Media-assets/products/${ name.toLowerCase() }.png`;
	}
	return `../assets/Media-assets/products/${ name.toLowerCase() }-${ colour.toLowerCase() }.png`;
}

export default getImage;
