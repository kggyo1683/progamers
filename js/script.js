const navItem = document.querySelector('.collapse')
function navHide() {
	navItem.classList.remove('show')
}
navItem.addEventListener('click', navHide)

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)

})
