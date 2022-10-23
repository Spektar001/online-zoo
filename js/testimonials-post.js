const testimonialsPosts = document.querySelectorAll('.testimonials__post');//посты которые находятся в карусели
const testPopup = document.querySelector('.testimonials-popup');//темный фон
const testPosts = document.querySelectorAll('.test__post');//массив выпадающих постов
const iconX = document.querySelector('.x-icon');//крестик на белом фоне, когда открылась карточка
const popupCard = document.querySelector('.popup-card');
const body = document.querySelector('.teg-body');

for (let i = 0; i < testimonialsPosts.length; i++) {
	testimonialsPosts[i].addEventListener('click', ()=> {
		if (window.innerWidth <= 995) {
			testPopup.classList.remove('close');
			testPosts[i].classList.remove('close');
			body.classList.add('hidden');
		}
	});
	testPopup.addEventListener('click', ()=> {
		testPopup.classList.add('close');
		testPosts[i].classList.add('close');
		body.classList.remove('hidden');
	});
	iconX.addEventListener('click', ()=> {
		testPopup.classList.add('close');
		testPosts[i].classList.add('close');
		body.classList.remove('hidden');
	});
}

// при нажатии на белое коно прекращает дальнейшую передачу текущего события
popupCard.addEventListener("click", (e) => {
	e.stopPropagation();
});
