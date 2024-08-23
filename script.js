
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

// Carrossel Script
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');
const indicators = document.querySelectorAll('.carousel-indicators button');

let currentIndex = 0;
let interval;

function updateCarousel(position) {
    track.style.transform = `translateX(-${position * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === position);
    });
}

function autoPlay() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    }, 3000); // Muda de slide a cada 3 segundos
}

function stopAutoPlay() {
    clearInterval(interval);
}

nextButton.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
    autoPlay();
});

prevButton.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
    autoPlay();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = index;
        updateCarousel(currentIndex);
        autoPlay();
    });
});

// Inicia a animação automática do carrossel
autoPlay();

// Script para adicionar o ano atual
document.getElementById('year').textContent = new Date().getFullYear();
