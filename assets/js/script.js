function Dom(elemento, classe){
    const elementoSelecionado = document.querySelector(elemento)
    this.element = elementoSelecionado;

    this.addClasse = function (){
        this.element.classList.add(classe)
    }
}

const adicionarClasse = new Dom();

function barraBusca(elemento){
    const lupa = document.querySelector(elemento);
    lupa.addEventListener('click', ativarBusca);
    function ativarBarra(){

    }
}





