let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let footerBy = document.querySelector('.footer__by');

movingNavigation();

window.addEventListener('resize',function(){
	movingNavigation();
});

function movingNavigation() {
	if (window.innerWidth <= 1024) {
		main.append(navigation);
	} else {
		footerBy.before(navigation);
	}
}