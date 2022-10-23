const headerMenu = document.getElementById('header-menu');
const bgLayer = document.querySelector('.bg-layer');

headerMenu.addEventListener('click', ()=> {
	headerMenu.classList.toggle('open');
	bgLayer.classList.toggle('close');
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == headerMenu || headerMenu.contains(target);
  let menu_is_active = headerMenu.classList.contains('open');
	if (!its_menu && menu_is_active) {
		headerMenu.classList.remove("open");
		bgLayer.classList.add('close');
  }
});