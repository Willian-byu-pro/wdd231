
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



/************************************matriz do curso ***********************************************************/

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

/*****************************************************script course creat**************************************************/

creatCourseBotton();

function creatCourseBotton() {

   courses.forEach(course =>{
     let card = document.createElement("section");
     card.classList.add("course")


     if (course.subject === "WDD") {
      card.classList.add("wdd");
     }
     if (course.subject === "CSE") {
      card.classList.add("cse");}
     

/***************************************************conteudo do cartão******************************************************/

     let number = document.createElement("h3");

     name.textContent = course.subject;
     number.innerHTML = `<span class="label">${course.subject}</span>${course.number} `;

     card.appendChild(number);

     document.querySelector(".grid").appendChild(card);


     })


}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      const cards = document.querySelectorAll(".course");

      cards.forEach(card => {
        if (filter === "all") {
          card.style.display = "block";
        } else if (card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

