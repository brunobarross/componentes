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
        pergunta.addEventListener('click', mostraResposta)
    });


    function mostraResposta(evento){
  

    }

}

accordion(console.log('iniciei'));











