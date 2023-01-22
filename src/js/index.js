const video = document.getElementById("video")
const linkDoVideo = video.src;




// OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer.
// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
   // passo 4 - abrir a modal na tela 
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

// passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");



// OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.
// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de identificar quando o usuário clicar no X.
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
 });












