document.addEventListener('DOMContentLoaded', () => {
    
    

}); 

document.querySelectorAll('.link-navegacao').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        let textoBotao = this.textContent.trim().toLowerCase();
        let classeAlvo = '';

        if (textoBotao === 'sobre') {
            classeAlvo = '.sobre-secao';
        } else if (textoBotao === 'skills') {
            classeAlvo = '.habilidades-secao';
        } else if (textoBotao === 'projetos') {
            classeAlvo = '.projetos-secao';
        } else if (textoBotao === 'trajetória') {
            classeAlvo = '.linha-tempo-secao';
        } else if (textoBotao === 'contato') {
            classeAlvo = '.contato-secao';
        }

        if (classeAlvo) {
            const secao = document.querySelector(classeAlvo);
            if (secao) {
                const topoElemento = secao.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: topoElemento - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const botaoNome = document.getElementById('nome');
if (botaoNome) {
    botaoNome.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const botaoFiltro = document.querySelector('.botao-efeito-filtro');
if (botaoFiltro) {
    botaoFiltro.addEventListener('click', function(e) {
        e.preventDefault();
        // Alterna a classe 'modo-claro' na tag <html>
        document.documentElement.classList.toggle('modo-claro');
    });
}

const cardsProjetos = document.querySelectorAll('.projetos-card-item');

cardsProjetos.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.borderColor = '#3b82f6';
        card.style.boxShadow = `${x - (rect.width/2)}px ${y - (rect.height/2)}px 20px rgba(59, 130, 246, 0.15)`;
    });

    card.addEventListener('mouseleave', function() {
        card.style.borderColor = 'rgba(31, 41, 55, 0.5)';
        card.style.boxShadow = 'none';
    });
});

const topoMenu = document.querySelector('.header-start');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        topoMenu.style.paddingTop = '5px';
        topoMenu.style.paddingBottom = '5px';
        topoMenu.style.position = 'fixed';
        topoMenu.style.top = '0';
        topoMenu.style.width = '100%';
        topoMenu.style.zIndex = '999';
        topoMenu.style.borderBottom = '1px solid #1f2937';
        topoMenu.style.transition = 'all 0.3s ease';
    } else {
        topoMenu.style.paddingTop = '0px';
        topoMenu.style.paddingBottom = '0px';
        topoMenu.style.position = 'static';
        topoMenu.style.borderBottom = 'none';
    }
});
