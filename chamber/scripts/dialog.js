// Espera até que todo o conteúdo da página seja carregado
document.addEventListener("DOMContentLoaded", () => {

  // Seleciona todos os botões que abrem modais
  const openButtons = document.querySelectorAll(".open-btn");

  // Seleciona todos os botões que fecham modais
  const closeButtons = document.querySelectorAll(".close-btn");

  // Para cada botão de abrir modal, adiciona um evento de clique
  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Pega o id do modal que esse botão deve abrir
      const dialogId = button.dataset.target;

      // Seleciona o dialog correto usando o id
      const dialog = document.getElementById(dialogId);

      // Abre o modal
      dialog.showModal();
    });
  });

  // Para cada botão de fechar modal, adiciona um evento de clique
  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Encontra o dialog pai mais próximo do botão
      const dialog = button.closest("dialog");

      // Fecha o modal
      dialog.close();
    });
  });
});