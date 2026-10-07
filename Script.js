const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sideMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        sideMenu.classList.remove('active');
    }
});

const menuLinks = sideMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
});

const langBtn = document.getElementById('langBtn');
const langSelector = document.querySelector('.lang-selector');
const currentFlag = document.getElementById('currentFlag');
const langOptions = document.querySelectorAll('.lang-option');

if (langBtn && langSelector) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedImgSrc = option.querySelector('img').getAttribute('src');
            if (currentFlag) {
                currentFlag.setAttribute('src', selectedImgSrc);
            }
            langSelector.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('active');
        }
    });
}

const sliderTrack = document.querySelector('.slider-track');
let currentSlide = 0;

setInterval(() => {
    currentSlide = (currentSlide + 1) % 2;
    sliderTrack.style.transform = `translateX(-${currentSlide * 50}%)`;
}, 5000);