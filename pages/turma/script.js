const imagens = [
    {src: "../../images/alunos/bea.jpeg", aluno: "Beatriz Cardoso"},
    {src: "../../images/alunos/Breno.jpeg", aluno: "Breno Piris"},
    {src: "../../images/alunos/bruno.gif", aluno: "Bruno Gomes"},
    {src: "../../images/alunos/Anne.jpeg", aluno: "Clenianne Silva"},
    {src: "../../images/alunos/daniel.jpg", aluno: "Daniel Guimarães"},
    {src: "../../images/alunos/eu.jpeg", aluno: "Douglas Arthur"},
    {src: "../../images/alunos/Eric.jpg", aluno: "Eric silva"},
    {src: "../../images/alunos/Graziela.jpeg", aluno: "Graziela Gomes"},
    {src: "../../images/alunos/Gustavo Amadio.jpeg", aluno: "Gustavo Amadio"},
    {src: "../../images/alunos/gustavo.jpg", aluno: "Gustavo Emanuel"},
    {src: "../../images/alunos/rebeca.jpg", aluno: "Jennifer Rebeca"},
    {src: "../../images/alunos/luis.jpg", aluno: "Luis Henrique"},
    {src: "../../images/alunos/maria.jpg", aluno: "Maria Eduarda"},
    {src: "../../images/alunos/wendy.jpg", aluno: "Wenddy Naelly"},
    {src: "../../images/alunos/Yuri.jpeg", aluno: "Yuri Ramalho"},
];

//header-mobile
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



if(window.innerWidth > 500){
    const headeMobile = document.getElementById("header-mobile")
    headeMobile.remove()
}
else if(window.innerWidth <= 500){
    const header = document.getElementById("header")
    header.remove()
}

//header-mobile