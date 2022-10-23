const progressScroll = document.querySelector('.testimonials__progress-scroll');//ползунок
const sliderRow = document.querySelector('.testimonials__row');//блок с постами
const screenWidth = window.innerWidth; //ширина экрана

function testimonialsCarousel() {
	// передвигая слайдер
	progressScroll.addEventListener("input", () => {
			if (screenWidth > 1599) slider1600px();
			if (screenWidth >= 996 && screenWidth <= 1599) slider1000px();
	});
	// изменяя ширину страницы возвращает слайдер по умолчанию
	window.addEventListener("resize", () => {
			progressScroll.value = '0';
			sliderRow.style.marginLeft = '0px';
	});
}
testimonialsCarousel();

function slider1600px() {
	if (progressScroll.value == '0') sliderRow.style.marginLeft = '0px';
	if (progressScroll.value == '1') sliderRow.style.marginLeft = '-295px';
	if (progressScroll.value == '2') sliderRow.style.marginLeft = '-590px';
	if (progressScroll.value == '3') sliderRow.style.marginLeft = '-885px';
	if (progressScroll.value == '4') sliderRow.style.marginLeft = '-1180px';
	if (progressScroll.value == '5') sliderRow.style.marginLeft = '-1475px';
	if (progressScroll.value == '6') sliderRow.style.marginLeft = '-1770px';
	if (progressScroll.value == '7') sliderRow.style.marginLeft = '-2065px';
}

function slider1000px() {
	if (progressScroll.value == '0') sliderRow.style.marginLeft = '0px';
	if (progressScroll.value == '1') sliderRow.style.marginLeft = '-320px';
	if (progressScroll.value == '2') sliderRow.style.marginLeft = '-640px';
	if (progressScroll.value == '3') sliderRow.style.marginLeft = '-960px';
	if (progressScroll.value == '4') sliderRow.style.marginLeft = '-1280px';
	if (progressScroll.value == '5') sliderRow.style.marginLeft = '-1600px';
	if (progressScroll.value == '6') sliderRow.style.marginLeft = '-1920px';
	if (progressScroll.value == '7') sliderRow.style.marginLeft = '-2240px';
}