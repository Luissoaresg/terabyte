document.addEventListener('DOMContentLoaded', function(){
    const srtUrl = window.location.search;
    const paramUrl = new URLSearchParams(srtUrl);
    const id = paramUrl.get("id");
    getProd(id);
});

function getProd(id){
    fetch("http://localhost:8080/pagcompra/" + id)
    .then(response => response.json())
    .then(prod => inputPag(prod))
    .catch(error => console.log("Ocorreu um erro ao buscar produto: " + error));
}
    
function inputPag(p){
    var bigImg = document.querySelector(".big-img");
    var img = new Image;
    img.src = "data:img/jpg;base64," + p.img;
    bigImg.appendChild(img)

    var tituloProd = document.querySelector(".titulo-prod");
    tituloProd.innerText = p.descri;
    
    var precode = document.querySelector(".precode");
    precode.innerHTML = "De: <s> " + formatReal(p.preco) + "</s> por:";

    var valor = document.getElementById("valor");
    valor.innerText = formatReal(p.preco * 0.4);
    
    var valorSpan = document.getElementById("value-span");
    valorSpan.innerText = formatReal((p.preco * 0.5) / 12);
}

function formatReal(valor){
    return (valor.toLocaleString("pt-br", {
        style:"currency",
        currency: "brl"
    }));
}