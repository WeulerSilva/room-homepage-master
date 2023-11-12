const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const primaryH = document.querySelector('.primary-text h1');
const primaryP = document.querySelector('.primary-text p');
const primaryImage = document.querySelector('.primary-image');
const arrow = document.querySelector('.arrow-config');
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuListA = document.querySelectorAll('.menu-list ul li a');
const logo = document.querySelector('.logo');
const divFake = document.querySelector('.div-fake');
const border = document.querySelectorAll('.border');


if(window.innerWidth <= 400) {
    primaryImage.style.backgroundImage = 'url(./assets/images/mobile-image-hero-1.jpg)';
}


const contents = [
    {
        title: 'Discover innovative ways to decorate',
        description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        image: './assets/images/desktop-image-hero-1.jpg',
        imageMobile: './assets/images/mobile-image-hero-1.jpg'
    },
    {
        title: 'We are available all across the globe',
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: './assets/images/desktop-image-hero-2.jpg',
        imageMobile: './assets/images/mobile-image-hero-2.jpg'
    },
    {
        title: 'Manufactured with the best materials',
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image: './assets/images/desktop-image-hero-3.jpg',
        imageMobile: './assets/images/mobile-image-hero-3.jpg'
    }
];

let aboutNumber = 0;

function about(sym) {
    if (sym === '+') {
        aboutNumber++;
    } else if (sym === '-') {
        aboutNumber--;
    }

    if (aboutNumber < 0) {
        aboutNumber = contents.length - 1;
    } else if (aboutNumber >= contents.length) {
        aboutNumber = 0;
    }

    const content = contents[aboutNumber];

    
    primaryH.innerHTML = content.title;
    primaryP.innerHTML = content.description;

    if(window.innerWidth <= 750) {
        primaryImage.style.backgroundImage = `url(${content.imageMobile})`;
    }else {
        primaryImage.style.backgroundImage = `url(${content.image})`;
    }
}

arrowLeft.addEventListener('click', () => { about('-'); });
arrowRight.addEventListener('click', () => { about('+'); });

function resizeArrow () {
    let size = window.innerWidth
    let sizeWidth = size - 600;
    if(window.innerWidth <= 600) {
        arrow.style.left = `calc(488px + ${sizeWidth}px)`;
    }
}

resizeArrow();

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop > 50) {
        arrow.style.display = 'none';
    }else if(scrollTop > 33 && window.innerWidth <= 500) {
        arrow.style.display = 'none';
    }else {
        arrow.style.display = 'flex';
    }
});


menuMobile.addEventListener('click', () => {

    if(menu.classList.contains('ok')) {
        menu.classList.remove('ok');
        menuMobile.style.backgroundImage = "url(./assets/images/icon-close.svg)";
        menu.style.backgroundColor = 'white';
        menu.style.marginTop = '0px';
        menu.style.paddingTop = '40px';
        menu.style.height = '109px';
        menuList.style.display = 'flex';
        logo.style.display = 'none';
        divFake.style.display = 'none';
    }else {
        menu.classList.add('ok');
        menuMobile.style.backgroundImage = "url(./assets/images/icon-hamburger.svg)";
        menu.style.backgroundColor = '';
        menu.style.marginTop = '32px';
        menu.style.paddingTop = '0px';
        menu.style.height = '40px';
        menuList.style.display = 'none';
        logo.style.display = 'flex';
        divFake.style.display = 'flex';
    }
    
})

menuListA.forEach( (e, i) => {
    e.addEventListener('mouseover', () => {
        border[i].style.display = 'flex';
    });
    e.addEventListener('mouseout', () => {
        border[i].style.display = 'none';
    })
})