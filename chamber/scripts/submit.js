/*const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString); 
console.log(myInfo);*/


const myInfo = new URLSearchParams(window.location.search); /**pego os parametros da URL e pesso para pegar os parametros depois do "?" jogo dentro da const myInfo */
                                                            /*posso tambem comocar window.locate ja direto no URLSearchParams */
console.log(myInfo);


/*apenas para ver as informaçoes individuais com um URLSearchParams posso usar a função "get" */
console.log(myInfo.get('first-name'));
console.log(myInfo.get('last-name'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('membership'));

const currentTemp = document.querySelector('#results').innerHTML = `
<div class="cardresult"><p>${myInfo.get('first-name')} ${myInfo.get('last-name')}</p></div>
<div class="cardresult"><p>Your email: ${myInfo.get('email')}</p></div>
<div class="cardresult"><p>Your Phone Number: ${myInfo.get('phone')}</p></div>
<div class="cardresult"><p>Your organization name: ${myInfo.get('organization')}</p></div>
<div class="cardresult"><p>Your clasification: ${myInfo.get('membership')}</p></div>
`;
