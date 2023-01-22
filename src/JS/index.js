const botaotrailer = document.querySelector(".botao-trailer");
const botaofecharmodal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkdoVideo = video.src;



console.log('mostrar o document',document);

console.log(document.querySelector(".botao-trailer"));


botaotrailer.addEventListener("click", () => { 
    console.log("clicou no botao veja o trailer");

    console.log(modal.classList.add("aberto"));
    video.setAttribute("src", linkdoVideo)

})

console.log("mostra o objeto da modal", modal)

botaofecharmodal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "")

});

