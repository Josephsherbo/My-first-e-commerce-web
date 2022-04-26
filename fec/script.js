const navslide = () => {
	const burger = document.querySelection('.burger');
	const nav = document.querySelection('.nav-links');

	burger.addEventListener('click', () => {
		nav.class.toggle('nav-active');
	});
}
