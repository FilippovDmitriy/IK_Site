let navigation = document.querySelector('.navigation');
let footerSocialNetwork = document.querySelector('.footer__socialNetwork');
let footerBy = document.querySelector('.footer__by');
let media = new Swiper('.media__wrapper', {
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	spaceBetween: 25,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		1550: {
			slidesPerView: 1.3,
		},
		1371: {
			slidesPerView: 1.1,
		},
		1200: {
			slidesPerView: 1,
		},
		1000: {
			slidesPerView: 1,
		},
		769: {
			slidesPerView: 1,
		},
	}
});

if (window.innerWidth <= 768) {
	media.destroy();
	media = null;
	document.querySelectorAll('.media__row').forEach(e => {
		document.querySelector('.media__PH').append(e);
	});
	document.querySelectorAll('.media__PH .media__row').forEach(e => {
		if (e.nextSibling != null) {
			e.nextSibling.classList.add('disactive');
			if (document.querySelector('.media__other') === null) {
				let other = document.createElement('a');
				other.classList.add('media__other');
				other.textContent = 'Ещe';
				e.after(other);
			}
		}
	});
	document.querySelector('.media__other').addEventListener('click', () => {
		if (document.querySelector('.media__other').nextSibling.nextSibling != null) {
			document.querySelector('.media__other').nextSibling.classList.remove('disactive')
			document.querySelector('.media__other').nextSibling.after(document.querySelector('.media__other'));
		} else {
			document.querySelector('.media__other').nextSibling.classList.remove('disactive')
			document.querySelector('.media__other').classList.add('disactive');
		}
	});
}

movingNavigation();
if (window.innerWidth <= 600) {
	navigation.classList.add('swiper-container');
	document.querySelector('.navigation ul').classList.add('swiper-wrapper');
		document.querySelectorAll('.navigation ul li').forEach(function(e){
		e.classList.add('swiper-slide');
	});
	new Swiper('.navigation', {
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		breakpoints: {
				500: {
					initialSlide: 4,
					slidesPerView: 4,
				},
				400: {
					initialSlide: 4,
					slidesPerView: 3.2,
				},
				300: {
					initialSlide: 4,
					slidesPerView: 2.8,
				}
			}
	});
}

document.querySelectorAll('.navigation ul li a').forEach(function(e){
	if (e.textContent == 'Медиа') {
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