//-----------------------------------------------botão  e links p/menu-------------------------------------------------------------------------------------

const navbutton = document.querySelector('#ham-btn');  //O JavaScript olha para a página HTML e procura um elemento que tenha o id (ham-btn).
                                                       //Quando encontra, ele guarda esse elemento na constante navbutton.
                                                       //“Ei, JS, pega o botão de hambúrguer e guarda aqui com o nome navbutton.


const navBar = document.querySelector('#nav-bar');  //O JavaScript olha para a página HTML e procura um elemento que tenha o id (nav-bar).
                                                    //Quando encontra, ele guarda esse elemento na constante navBar.
                                                    //“Ei, JS, pega o elemento nav  chamado nav-bar e guarda aqui com o nome navBar. 



//Agora, o código fala: “navbutton, fica de olho, porque quando alguém te clicar, você vai fazer uma ação.”                                                       
navbutton.addEventListener ('click', () => {
    //Quando o botão for clicado, o código acessa a lista de classes CSS do botão (classList)
    navbutton.classList.toggle('show');
    //O método .toggle('show') funciona como um interruptor:
    //Se o botão já tiver a classe show, ele remove.
    //Se o botão não tiver, ele adiciona.

    //Quando o botão for clicado, o código acessa a lista de classes CSS do botão (classList)
    navBar.classList.toggle('show');
    //Se o botão já tiver a classe show, ele remove.
    //Se o botão não tiver, ele adiciona.
    //Assim a aba de navegação aparece e desaparece de acordo com o CLick
});


// ----------------------------- laste Modificação ------------------------------------------------------------------------



//Aqui ele está pegando o elemento da página HTML com o id especificado.//
const LastModified = document.querySelector("#LastModified");

//Isso cria um objeto de data atual, ou seja, o dia e a hora exatos de agora.//
const today = new Date();


LastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat("en-US",
{
    dateStyle:"full"

}
).format(today)}</span>`;


// ----------------------------- Grid Modificação ------------------------------------------------------------------------


// Função assíncrona para buscar e exibir os membros


async function loadMembers() {
  try {
    // Faz a requisição ao arquivo JSON
    const response = await fetch('data/members.json');

    // Converte a resposta para objeto JS
    const members = await response.json();

    // Seleciona a div onde vamos colocar os dados
    const container = document.getElementById('company');
 /***************************************************conteudo do cartão******************************************************/
    members.forEach(member => {
         let card = document.createElement("section");
         card.classList.add("member"); // Classe base

            // Estrutura do cartão
         let name = document.createElement("h2");
         let address = document.createElement("p");
         let phone = document.createElement("p");
         let website = document.createElement("p");
         let img = document.createElement("img");
         let membershipLevel = document.createElement("p");
         let description = document.createElement("p");
         let hours = document.createElement("p");

         name.textContent = member.name;
         address.textContent = member.address;
         phone.textContent = member.phone;
         website.textContent = member.website;
         membershipLevel.textContent = member.membershipLevel;
         description.textContent = member.description;
         hours.textContent = member.hours
         img.src = `images/${member.image}`; // precisa existir no JSON
         img.alt = `${member.name} foto`;

         card.appendChild(img);
         card.appendChild(name);
         card.appendChild(address);
         card.appendChild(phone);
         card.appendChild(website);
         card.appendChild(description);
         card.appendChild(hours);

         container.appendChild(card);

        });

    } catch (error) {
     console.error("Erro ao carregar os membros:", error);
    } 
}


loadMembers();


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



