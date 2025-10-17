// Seleciona elementos
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".modal .close");

// Abrir modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

// Fechar modal ao clicar no X
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none";
  }
}