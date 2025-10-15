async function loadTools() {
  try {
    // Faz a requisição ao arquivo JSON
    const response = await fetch('data/tools.json');

    // Converte a resposta para objeto JS
    const tools = await response.json();

    // Seleciona a div onde vamos colocar os dados
    const container = document.getElementById('company');
 /***************************************************conteudo do cartão******************************************************/
    tools.forEach(tool => {
         let card = document.createElement("section");
         card.classList.add("tool"); // Classe base

            // Estrutura do cartão
         let name = document.createElement("h2");
         let website = document.createElement("p");
         let img = document.createElement("img");
         //let membershipLevel = document.createElement("p");
         let description = document.createElement("p");


         name.textContent = tool.name;
         website.textContent = tool.website;
         //membershipLevel.textContent = member.membershipLevel;
         description.textContent = tool.description;
         img.src = `${tool.image}`; // precisa existir no JSON
         img.alt = `${tool.name} foto`;

         card.appendChild(img);
         card.appendChild(name);
         card.appendChild(website);
         card.appendChild(description);

         container.appendChild(card);

        });

    } catch (error) {
     console.error("Erro ao carregar as ferramentas:", error);
    } 
}


loadTools();


const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');
const companyDiv = document.getElementById('company');

gridBtn.addEventListener('click', () => {
    companyDiv.classList.add('grid');
    companyDiv.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    companyDiv.classList.add('list');
    companyDiv.classList.remove('grid');
});