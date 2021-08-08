
 const tamanhoTela = window.matchMedia("(max-width: 1024px)").matches;

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

/***BARRA DE BUSCA MENU DESKTOP ***/

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




/**ATIVAR MENU MOBILE */
function menuMobile(){
    if(tamanhoTela){
        const adicionarClasse = new Dom(".menu__mobile");
        const iconeMenu = document.querySelector(".menu__mobile-wrapper-burger");
        const fundo = document.querySelector(".fundo");

        iconeMenu.addEventListener("click", (evento)=>{
            adicionarClasse.addClasse("ativar");
        });
    }
}
menuMobile();


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













