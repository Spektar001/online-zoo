const donateRadioInput = document.querySelectorAll('.donate-radio-input'); //желтая точка
const circle1 = document.querySelectorAll('.circle1');//первый оранжевый круг
const circle2 = document.querySelectorAll('.circle2');//второй оранжевый круг
const amountPriceNumber = document.querySelectorAll('.donate-pick-and-feed__amount-price-number');//числа
const anotherAmount = document.querySelector('.donate-pick-and-feed__another-amount');//input

//убираем оранжевый цвет с цифр и оранжевые круги
function removeOrange() {
	for (let i = 0; i < amountPriceNumber.length; i++) {
		amountPriceNumber[i].classList.remove('orange');
		circle1[i].classList.remove('active');
		circle2[i].classList.remove('active');
	}
}

//вводим число в инпут и оно подсвечивается и добавляются оранжевые круги
anotherAmount.addEventListener('input', ()=> {
	for (let i = 0; i < amountPriceNumber.length; i++) {
		amountPriceNumber[i].classList.remove('orange');
		circle1[i].classList.remove('active');
		circle2[i].classList.remove('active');
		if (anotherAmount.value == amountPriceNumber[i].innerHTML) {
			amountPriceNumber[i].classList.add('orange');
			circle1[i].classList.add('active');
			circle2[i].classList.add('active');
		}
	}
});

//при клике на желтую точку, подсвечивается цифра и эта цифра записывается в инпут
for (let i = 0; i < donateRadioInput.length; i++) {
	donateRadioInput[i].addEventListener('click', ()=> {
		removeOrange();
		amountPriceNumber[i].classList.add('orange');
		circle1[i].classList.add('active');
		circle2[i].classList.add('active');
		anotherAmount.value = amountPriceNumber[i].innerHTML;
	});
}

//при загрузке сраницы в инпуте пишется цифра, которая подсвечена
for (let i = 0; i < amountPriceNumber.length; i++) {
	if(amountPriceNumber[i].classList.contains('orange')){
		anotherAmount.value = amountPriceNumber[i].innerHTML;
	}
}

