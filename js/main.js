const foodBtns = document.querySelectorAll('.film-menu button')
const foodList = document.querySelectorAll('.film-item')
console.log(foodBtns);
console.log("dđ",foodList);
foodBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-film')
        console.log(type);
		// remove and set active fpr button
		document.querySelector('.film-menu button.active').classList.remove('active')
		e.target.classList.add('active')

		// filter elements
		foodList.forEach((item) => {
			if (type == 'all' || item.getAttribute('type-film') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
	})
})
