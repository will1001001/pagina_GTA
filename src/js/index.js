const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .pltaformas");
//pegar o click do usuario
botao.addEventList("click", ()=> {
elementoPlataformas.classList.add("ativo");

    elementoPlataformas.classList.toggle("ativo");
    
    // if(botaoEstaAberto){
    //     elementoPlataformas.classList.remove("ativo")
    // }else{
    //     elementoPlataformas.classList.add('ativo')
    // }
});