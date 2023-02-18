// // Cria um array com os caminhos das imagens
// var imagens = ["../../images/feira-das-nacoes.jpeg", "../../images/semana-pra-vida.jpeg"];
    
// // Percorre o array de imagens e cria um elemento <img> para cada uma
// for (var i = 0; i < imagens.length; i++) {
//     var img = document.createElement("img");
//     img.src = imagens[i];
//     document.querySelector(".image").appendChild(img);
// }


// Cria um array com os caminhos das imagens e as classes correspondentes
var imagens = [
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
    {src: "../../images/giga.webp", class: "img"},
];

// Percorre o array de imagens e cria um elemento <img> para cada uma
for (var i = 0; i < imagens.length; i++) {
    var img = document.createElement("img");
    img.src = imagens[i].src;
    img.classList.add(imagens[i].class); // Adiciona a classe correspondente
    document.querySelector(".image").appendChild(img);
}