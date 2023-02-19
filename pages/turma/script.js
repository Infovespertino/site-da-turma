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

if(window.innerWidth >= 320){
    const mobile = document.getElementById("mobile")

    const header = document.getElementById("header")
    header.remove()

    const headerMobile = document.createElement("nav")
    headerMobile.classList.add("header-mobile")

    const input = document.createElement("input")
    input.type = "checkbox"
    input.id = "check"

    const label = document.createElement("label")
    label.setAttribute("for", "check")
    const imgSelect = document.createElement("img")
    imgSelect.src = "../../images/select.svg"
    label.appendChild(imgSelect)
    
    

    const imgLogo = document.createElement("img")
    imgLogo.src = "../../images/logo.svg"

    const ul = document.createElement("ul")
    const liEvents = document.createElement("li")
    const liClass = document.createElement("li")
    const liRedes = document.createElement("li")
    const liHome = document.createElement("li")

    const aHome = document.createElement("a")
    aHome.href = "../../index.html"
    const linkTextH = document.createTextNode("HOME");
    aHome.appendChild(linkTextH);
    liHome.appendChild(aHome)

    const aEvents = document.createElement("a")
    aEvents.href = "../eventos/index.html"
    const linkTextE = document.createTextNode("EVENTOS");
    aEvents.appendChild(linkTextE);
    liEvents.appendChild(aEvents)
    
    const aClass = document.createElement("a")
    aClass.href = "./index.html"
    const linkTextC = document.createTextNode("TURMA");
    aClass.appendChild(linkTextC);
    liClass.appendChild(aClass)
    
    const aRedes = document.createElement("a")
    aRedes.href = "./index.html"
    const linkTextR = document.createTextNode("REDES");
    aRedes.appendChild(linkTextR);
    liRedes.appendChild(aRedes)


    ul.appendChild(liHome)
    ul.appendChild(liEvents)
    ul.appendChild(liClass)
    ul.appendChild(liRedes)
    
    
    headerMobile.appendChild(imgLogo)
    headerMobile.appendChild(input)
    headerMobile.appendChild(label)
    
    headerMobile.appendChild(ul)


    mobile.appendChild(headerMobile)
}