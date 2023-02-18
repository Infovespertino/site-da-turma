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
    {src: "../../images/giga.webp", aluno: "Nome Sobrenome"},
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