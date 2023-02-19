const imagens = [
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome1"},
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