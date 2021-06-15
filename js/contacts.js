let navigation = document.querySelector('.navigation');
let footerSocialNetwork = document.querySelector('.footer__socialNetwork');
let footerBy = document.querySelector('.footer__by');

movingNavigation();
if (window.innerWidth <= 600) {
		navigation.classList.add('swiper-container');
		document.querySelector('.navigation ul').classList.add('swiper-wrapper');
		document.querySelectorAll('.navigation ul li').forEach(function(e){
			e.classList.add('swiper-slide');
		});
		new Swiper('.swiper-container', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			breakpoints: {
				500: {
					initialSlide: 4,
					slidesPerView: 3,
				},
				470: {
					initialSlide: 6,
					slidesPerView: 3.6,
				},
				385: {
					initialSlide: 8,
					slidesPerView: 3.2,
				},
				320: {
					initialSlide: 8,
					slidesPerView: 2.8,
				}
			}
		});
	} else {

	}
document.querySelectorAll('.navigation ul li a').forEach(function(e){
	if (e.textContent == 'Контакты') {
		e.classList.add('active');
	}
});

function movingNavigation() {
	if (window.innerWidth <= 1024) {
		footerSocialNetwork.before(navigation);
	} else {
		footerBy.before(navigation);
	}
}
function initialSlider() {
}