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