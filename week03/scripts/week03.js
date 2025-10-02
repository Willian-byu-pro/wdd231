const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const mylat = "49.75"
const mylon = "6.64"
const myKey = "ef6724cc1ba790d52a2781bb8f91b1fa"


/*Declare uma constvariável chamada " url" e atribua a ela uma string de URL válida, conforme fornecido na documentação da API do openweathermap apresentada acima e marcada. 

- Use a API do clima atual chamada ' weather'.
- Inicie uma string de consulta com o ?caractere " ", conforme mostrado nos exemplos.
- Use um &entre cada par chave/valor na sequência de consulta nas próximas etapas.
- Especifique a latitude e longitude de Trier, Alemanha, usando as informações que você coletou e os exemplos fornecidos.
- Defina as unidades para imperial: " units=imperial" ou para métrico: " units=metric"
- Forneça sua chave de API : " "appid=[enter your key here]

*/


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&units=metric&appid=${myKey}`;


/*Defina uma função assíncrona chamada " apiFetch() " que usa um bloco try para lidar com erros.
- Armazene os resultados da busca de URL em uma variável chamada " response".
- Se a resposta for OK, então armazene o resultado da response.json() conversão em uma variável chamada " data ", e
- Envie os resultados para o console para teste.
- Caso contrário, lance um erro usando oresponse.text().
- Conclua o bloco catch enviando qualquer erro de tentativa para o console.*/

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);

        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
        
    }
    
}


/*Sobre o codigo acima */
/*
-async e await são como dizer: “JavaScript, espera eu pegar os dados da internet antes de continuar.”
-fetch(url) vai lá na internet e pega o clima.
-response.ok checa se deu certo.
-response.json() transforma os dados que vieram da internet em algo que o JavaScript consegue entender.
-console.log(data) mostra tudo no console (tipo o caderno de notas do navegador).
-Se der erro, o catch vai mostrar no console o que deu errado.
*/


apiFetch();


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`; /*innerHTML: é como dizer “JavaScript, põe isso dentro da caixa HTML que eu guardei na variável currentTemp”. */
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc); /*setAttribute serve para colocar ou mudar atributos de uma tag HTML. */
  weatherIcon.setAttribute('alt', desc); /*Como o alt fica apenas na descrição, sendo oculto para isso serve o captionDesc - jogar na tela */
  captionDesc.textContent = `${desc}`;
}