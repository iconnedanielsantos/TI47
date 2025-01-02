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
