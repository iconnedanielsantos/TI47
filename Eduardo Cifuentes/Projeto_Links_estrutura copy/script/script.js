document.getElementById('menuIcon').addEventListener('click', function() {
    // Alterna a classe 'active' no menu de navegação
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
    
    // Alterna o estilo do menu hambúrguer (mudar para o "X")
    const bars = document.querySelectorAll('.menu-icon .bar');
    bars[0].classList.toggle('rotate1');
    bars[1].classList.toggle('fade');
    bars[2].classList.toggle('rotate2');
});
const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicator');
let index = 0;

function showSlide(newIndex) {
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    if (newIndex >= totalSlides) index = 0; // Volta ao início
    else if (newIndex < 0) index = totalSlides - 1; // Vai ao último slide
    else index = newIndex;

    const offset = index * -100; // Calcula a posição horizontal
    carousel.style.transform = `translateX(${offset}vw)`; // Desloca o carrossel

    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
}

function autoSlide() {
    showSlide(index + 1);
}

let slideInterval = setInterval(autoSlide, 3000);

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(Number(indicator.dataset.index));
        slideInterval = setInterval(autoSlide, 3000);
    });
});
