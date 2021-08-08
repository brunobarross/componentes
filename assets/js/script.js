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
    const menu = document.querySelector(".menu")
    const adicionarClasse = new Dom('.menu');
    const lupa = document.querySelector('.lupa');



lupa.addEventListener("click", ()=>{
    adicionarClasse.addClasse('ativar');

});

document.addEventListener('click', function(event) {
    let clicouDentro = menu.contains(event.target);
    if (clicouDentro) {
        console.log('clicou dentro')
    } else {
      menu.classList.remove('ativar');
      console.log('clicou fora');
    }
});

}

barraBusca();



/******ACCORDION ******/

function accordion(){
    const perguntas = document.querySelectorAll('.faq__wrapper-item h3');
    perguntas[0].classList.add("ativar")
    perguntas[0].nextElementSibling.classList.add("ativar")

    perguntas.forEach((pergunta) =>{
        pergunta.addEventListener('click', mostraResposta)
    });


    function mostraResposta(evento){
        this.classList.toggle('ativar');
        this.nextElementSibling.classList.toggle('ativar');
      
    }

}

accordion();













