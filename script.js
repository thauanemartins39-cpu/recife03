document.addEventListener('DOMContentLoaded', () => {

    // Opções para o nosso observador (Intersection Observer)
    const options = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    };

    // A função que será chamada quando um elemento entrar na tela
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a observação após a animação
            }
        });
    };

    // Cria o observador
    const observer = new IntersectionObserver(handleIntersection, options);

    // Pede ao observador para observar cada <article>
    const articles = document.querySelectorAll('article');
    articles.forEach(article => observer.observe(article));

});