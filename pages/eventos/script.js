// let listEvents = [];
// listEvents[0] = "../../images/Ex.webp";
//
//
//
// for(let i=0; i < listEvents.length ; i=i+1) {
//     document.write("<img alt='img' src=" + listEvents[i] + " >")
// }

const imagens = [
    {src: "../../images/Eventos/semana-para-vida.jpeg", name: "Semana para vida: 2022, tema: violencia e bullying "},
    {src: "../../images/Eventos/feira-das-nações.jpeg", name: "Feira das nações: 2022, tema: Japão"},
    {src: "../../images/Eventos/debate-aborto.jpeg", name: "Debate: 2022, tema: regulamentação do aborto, vencedor: contra"},
    {src: "../../images/Eventos/debate-eutanasia.jpeg", name: "Debate: 2022, tema: regulamentação da eutanásia, vencedor: a favor"},
];

for (let i = 0; i < imagens.length; i++) {
    let img = document.createElement("img");
    img.src = imagens[i].src;
    img.alt = imagens[i].name;
    let p = document.createElement("p");
    p.innerText = imagens[i].name;
    let divImg = document.createElement("div");
    divImg.appendChild(img);
    divImg.appendChild(p);
    let div = document.querySelector(".image");
    div.appendChild(divImg);
}

//header-mobile
if(window.innerWidth > 500){
    const headeMobile = document.getElementById("header-mobile")
    headeMobile.remove()
}
else if(window.innerWidth <= 500){
    const header = document.getElementById("header")
    header.remove()
}

//header-mobile
