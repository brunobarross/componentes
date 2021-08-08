function Dom(elemento){
    const elementoSelecionado = document.querySelector(elemento)
    this.element = elementoSelecionado;

    this.addClasse = function (classe){
        elementoSelecionado.classList.toggle(classe);
    }

    this.removeClasse = function (classe){
        elementoSelecionado.classList.remove(classe);
    }
}



function barraBusca(){
    const adicionarClasse = new Dom('.menu');

const lupa = document.querySelector('.lupa');

lupa.addEventListener("click", ()=>{
    adicionarClasse.addClasse('ativar');
});
}

barraBusca();

/******ACCORDION ******/

function accordion(){
    const adicionarClasse = new Dom('.faq');
    const perguntas = document.querySelectorAll('.faq__wrapper-item h3');

    perguntas.forEach((pergunta) =>{
        pergunta.classList.remove('ativar')
        pergunta.addEventListener('click', mostraResposta)
    });


    function mostraResposta(evento){
        this.classList.toggle('ativar');
        this.nextElementSibling.classList.toggle('ativar');
    }

}

accordion(console.log('iniciei'));











