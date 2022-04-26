const navslide = () => {
	const burger = document.querySelection('.burger');
	const nav = document.querySelection('.nav-links');
	const navlinks = document.querySelectorAll('.nav-links li');
	//toggle nav
	burger.addEventListener('click', () => {
		nav.class.toggle('nav-active');
	});
	// animate links
	navlinks.forEach((link, index)=>{
		link.style.animation = 'navlinkfade 0.5s ease forwards ${index / 7}s';
		console.log(index / 7);
	});
}

navslide();