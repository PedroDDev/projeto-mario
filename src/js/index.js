const trailerButton = document.querySelector(".botao-trailer");
const closeModalButton = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const videoLink = video.src;

function alternateModalStatus(){
    modal.classList.toggle("aberto");

};

trailerButton.addEventListener("click", () => {
    alternateModalStatus();
    video.setAttribute("src", videoLink);
});

closeModalButton.addEventListener("click", () => {
    alternateModalStatus();
    video.setAttribute("src", "");
});




