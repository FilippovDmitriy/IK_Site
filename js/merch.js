let navigation = document.querySelector('.navigation');
let footerSocialNetwork = document.querySelector('.footer__socialNetwork');
let footerBy = document.querySelector('.footer__by');
let popupContainer = document.querySelectorAll('.popup__container');
let span = document.createElement('span');
let sup = document.createElement('sup');
span.append(sup);

let products = [];

movingNavigation();
if (window.innerWidth <= 1024) {
	popupContainer.forEach(e => {
		e.prepend(e.querySelector('.popup__close'));
	});
}
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
				initialSlide: 0,
				slidesPerView: 4,
			},
			400: {
				initialSlide: 0,
				slidesPerView: 3.2,
			},
			300: {
				spaceBetween: 15,
				initialSlide: 0,
				slidesPerView: 2.8,
			}
		}
	});
}
document.querySelector('.navigation ul').append(document.querySelector('.navigation ul li').cloneNode(true));

let n = 0;
document.querySelectorAll('.navigation ul li a').forEach(function(e){
	if (e.textContent == 'Мерч') {
		e.classList.add('active');
	}
	if (e.textContent == 'О группе') {
		n++;
		if (n == 2) {
			e.addEventListener('click', (e) => {
				e.preventDefault();
				document.querySelector('.basket').classList.add('active');
			});
			e.textContent = 'Корзина';
			e.append(span);
		}
	}
});

document.querySelectorAll('.merch__item').forEach(e => {
	e.addEventListener('click', () => {
		e.nextElementSibling.classList.add('active');
	});
});
document.querySelectorAll('.popup__area').forEach(e => {
	e.addEventListener('click', () => {
		e.parentNode.classList.remove('active');
	});
});
document.querySelectorAll('.basket__area').forEach(e => {
	e.addEventListener('click', () => {
		e.parentNode.classList.remove('active');
	});
});
document.querySelectorAll('.popup__close').forEach(e => {
	e.addEventListener('click', () => {
		document.querySelectorAll('.popup').forEach(e => {
			e.classList.remove('active');
		});
	});
});
document.querySelectorAll('.basket__close').forEach(e => {
	e.addEventListener('click', () => {
		document.querySelector('.basket').classList.remove('active');
	});
});
document.querySelectorAll('.popup__basket').forEach(e => {
	e.addEventListener('click', () => {
		let cost = e.parentNode.querySelector('.popup__count input').value * e.parentNode.parentNode.parentNode.parentNode.querySelector('.popup__price').textContent.replace(/ +/g, '').trim().replace(/₸+/g, '').trim();
		products.push({
			image: e.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.popup__image img').getAttribute('src'),
			title: e.parentNode.parentNode.parentNode.parentNode.querySelector('.popup__title').textContent,
			count: e.parentNode.querySelector('.popup__count input').value + ' шт.',
			price: e.parentNode.parentNode.parentNode.parentNode.querySelector('.popup__price').textContent,
			cost: cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₸',
		});
		if (sup.textContent == '') {
			sup.textContent = '0';
		}
		sup.textContent = Number.parseInt(sup.textContent)+1;
		for (let i = 0; i < products.length; i++) {
			document.querySelector('.basket__products').append(document.querySelectorAll('.basket__product')[0].cloneNode(true));
			document.querySelectorAll('.basket__product')[i+1].classList.remove('disactive');
			if (document.querySelectorAll('.basket__product')[i+1].querySelector('.basket__image img') == null) {
				document.querySelectorAll('.basket__product')[i+1].querySelector('.basket__image').append(document.createElement('img'));
				document.querySelectorAll('.basket__product')[i+1].querySelector('.basket__image img').setAttribute('src', products[i].image);
			}
			document.querySelectorAll('.basket__product')[i+1].querySelector('.basket__name').textContent = products[i].title;
			document.querySelectorAll('.basket__product')[i+1].querySelector('.basket__count').textContent = products[i].count;
			document.querySelectorAll('.basket__product')[i+1].querySelector('.basket__price').textContent = products[i].price;
			document.querySelectorAll('.basket__product')[i+1].querySelector('.basket__cost').textContent = products[i].cost;
		}
		let n = 0;
		products.forEach(e => {
			n += Number.parseInt(e.cost.replace(/ +/g, '').trim().replace(/₸+/g, '').trim());
		});
		document.querySelector('.basket__result span').textContent = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₸';
		document.querySelectorAll('.popup').forEach(e => {
			e.classList.remove('active');
		});
	});
});
document.querySelectorAll('.popup__minus').forEach(e => {
	e.addEventListener('click', () => {
		if (e.parentNode.querySelector('.popup__number input').value > 1) {
			e.parentNode.querySelector('.popup__number input').value--;
		}
	})
});
document.querySelectorAll('.popup__plus').forEach(e => {
	e.addEventListener('click', () => {
		if (e.parentNode.querySelector('.popup__number input').value < 10) {
			e.parentNode.querySelector('.popup__number input').value++;
		}
	})
});
document.querySelectorAll('.popup__sizes input').forEach(e => {
	if (e.checked) {
		e.parentNode.classList.add('active');
	}
	e.addEventListener('click', () => {
		e.parentNode.parentNode.parentNode.querySelectorAll('.popup__sizes input').forEach(e => {
			e.parentNode.classList.remove('active');
		});
		if (e.checked) {
			e.parentNode.classList.add('active');
		}
	})
});
document.querySelector('.basket__start').addEventListener('click', () => {
	if (products.length === 0) {
		alert('Корзина пуста');
	} else {
		document.querySelector('.basket').classList.remove('active');
		document.querySelector('.making').classList.add('active');
	}
});
document.querySelector('.making__area').addEventListener('click', () => {
	document.querySelector('.making').classList.remove('active');
});
document.querySelector('.making__close').addEventListener('click', () => {
	document.querySelector('.making').classList.remove('active');
});
document.querySelector('.making__return').addEventListener('click', () => {
	document.querySelector('.making').classList.remove('active');
	document.querySelector('.basket').classList.add('active');
});
document.querySelectorAll('.making__radio input').forEach(e => {
	if (e.checked) {
		e.parentNode.classList.add('active');
	}
	e.parentNode.addEventListener('click', () => {
		e.parentNode.parentNode.querySelectorAll('input').forEach(e => {
			e.parentNode.classList.remove('active');
		});
		if (e.checked) {
			e.parentNode.classList.add('active');
		}
	})
});
document.querySelector('.making__button').addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('.making').classList.remove('active');
	document.querySelector('.decoration').classList.add('active');
});
document.querySelector('.decoration__close').addEventListener('click', () => {
	document.querySelector('.decoration').classList.remove('active');
});
document.querySelector('.decoration__area').addEventListener('click', () => {
	document.querySelector('.decoration').classList.remove('active');
});

function movingNavigation() {
	if (window.innerWidth <= 1024) {
		footerSocialNetwork.before(navigation);
	} else {
		footerBy.before(navigation);
	}
}