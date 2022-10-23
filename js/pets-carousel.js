const btnLeft = document.querySelector('.pets__btn-arrow-left');
const btnRight = document.querySelector('.pets__btn-arrow-right');

function leftBox() {
	btnLeft.removeEventListener('click', leftBox); //удаляем слушатель 'click' с кнопки, чтобы не закликать кнопку

	const petsRow = document.querySelector('.pets__row');
	const petsBox = document.querySelector('.pets__box');
	const copyPetsRow = clonePetsRow(petsRow); //копия petsBox с рандомно переставленными карточками

	copyPetsRow.classList.add('right'); //добавляем класс, чтобы появился новый блок с карточками
	petsRow.classList.add('left'); //сдвигаем нынешний блок карточек
	setTimeout(() => {
			petsRow.remove(); //удаляем нынешний блок с карточками
			petsBox.prepend(copyPetsRow); //вставляем новый блок с карточками после удаления старого
	}, 300); //выставляем 0,3s потому что в transition тоже 0,3s
	setTimeout(() => {
			copyPetsRow.classList.remove('right');
	}, 320); //выставляем 0,3s потому что в transition тоже 0,3s
	setTimeout(() => {
			btnLeft.addEventListener('click', leftBox); //возвращаем слушатель 'click' для кнопки
	}, 1000);
}

function rightBox() {
	btnRight.removeEventListener('click', rightBox);

	const petsRow = document.querySelector('.pets__row');
	const petsBox = document.querySelector('.pets__box');
	const copyPetsRow = clonePetsRow(petsRow);

	copyPetsRow.classList.remove('center');
	petsRow.classList.add('right');
	setTimeout(() => {
			petsRow.remove();
			petsBox.append(copyPetsRow);
	}, 300);
	setTimeout(() => {
			copyPetsRow.classList.add('center');
	}, 320);
	setTimeout(() => {
			btnRight.addEventListener('click', rightBox);
	}, 1000);
}

//создаем копию узла с потомками в рандомном порядке
function clonePetsRow(dup) {
	const dupCloneNode = dup.cloneNode(true); //дубликат узла
	const dupCloneNode2 = dup.cloneNode(true); //дубликат узла в котором рандомно заполнятся карточки
	while (dupCloneNode2.firstChild) { //удаляем все дочерние элементы этого узла
		dupCloneNode2.removeChild(dupCloneNode2.firstChild);
	}
	while (dupCloneNode.children.length) { // заполняем дубликат в случайном порядке
		dupCloneNode2.appendChild(dupCloneNode.children[Math.floor(Math.random() * dupCloneNode.children.length)]);
	}
	return dupCloneNode2;
}

btnLeft.addEventListener('click', leftBox);
btnRight.addEventListener('click', rightBox);
