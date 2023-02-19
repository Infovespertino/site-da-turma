// let listEvents = [];
// listEvents[0] = "../../images/Ex.webp";
//
//
//
// for(let i=0; i < listEvents.length ; i=i+1) {
//     document.write("<img alt='img' src=" + listEvents[i] + " >")
// }

const imagens = [
    {src: "../../images/Ex.webp", aluno: "Nome Evento"},
    {src: "../../images/Ex.webp", aluno: "Nome Evento"},
    {src: "../../images/Ex.webp", aluno: "Nome Evento"},
    {src: "../../images/Ex.webp", aluno: "Nome Evento"},
    {src: "../../images/Ex.webp", aluno: "Nome Evento"},
    {src: "../../images/Ex.webp", aluno: "Nome Evento"},
];

for (let i = 0; i < imagens.length; i++) {
    let img = document.createElement("img");
    img.src = imagens[i].src;
    img.alt = imagens[i].aluno;
    let p = document.createElement("p");
    p.innerText = imagens[i].aluno;
    let divImg = document.createElement("div");
    divImg.appendChild(img);
    divImg.appendChild(p);
    let div = document.querySelector(".image");
    div.appendChild(divImg);
}