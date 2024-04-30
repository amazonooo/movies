/*=============== SHOW MENU ===============*/
const nav = document.getElementById('nav'),
      headerMenu = document.getElementById('header-menu'),    
      navClose = document.getElementById('nav-close');    

if(headerMenu) {
    headerMenu.addEventListener('click', () => {
        nav.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        nav.classList.remove('show-menu')
    })
}


/*=============== SWIPER MOVIE ===============*/
let swiperMovie = new Swiper('.movie__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints: {
        440: {
            slidesPerView: 'auto',
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        }
    }
})

/*=============== SWIPER NEW ===============*/
let swiperNew = new Swiper('.new__swiper', {
	loop: true,
	grabCursor: true,
	slidesPerView: 2,
	centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

	breakpoints: {
		440: {
			slidesPerView: 'auto',
			centeredSlides: false,
		},
		768: {
			slidesPerView: 4,
			centeredSlides: false,
		},
		1200: {
			slidesPerView: 5,
			centeredSlides: false,
		},
	},
})

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50
			? header.classList.add('blur-header')
			: header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350
		? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)