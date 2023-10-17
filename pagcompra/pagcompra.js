document.addEventListener('DOMContentLoaded', function(){
    const srtUrl = window.location.search;
    const paramUrl = new URLSearchParams(srtUrl);
    const id = paramUrl.get("id");
    getImg(id);
    getProd(id);
});

function getProd(id){
    fetch("http://localhost:8080/pagcompra/" + id)
    .then(response => response.json())
    .then(prod => inputPag(prod))
    .catch(error => console.log("Ocorreu um erro ao buscar produto: " + error));
}

function getImg(id){
    fetch("http://localhost:8080/imgsCad/" + id)
    .then(response => response.json())
    .then(img => inputImgs(img))
    .catch(error => console.log("Ocorreu um erro ao buscar imagem: " + error));
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

    var valorCard = document.getElementById("valor-card");
    valorCard.innerText = formatReal(p.preco * 0.5);
    
    var valorSpan = document.getElementById("value-span");
    valorSpan.innerText = formatReal((p.preco * 0.5) / 12);
}

function inputImgs(img){
    var littleImg = document.querySelector(".little-imgs");
    
    var img1 = new Image;
    img1.src = "data:img/jpg;base64," + img.img1;
    littleImg.appendChild(img1);

    var img2 = new Image;
    img2.src = "data:img/jpg;base64," + img.img2;
    littleImg.appendChild(img2);

    var img3 = new Image;
    img3.src = "data:img/jpg;base64," + img.img3;
    littleImg.appendChild(img3);

    var img4 = new Image;
    img4.src = "data:img/jpg;base64," + img.img4;
    littleImg.appendChild(img4);

    var img5 = new Image;
    img5.src = "data:img/jpg;base64," + img.img5;
    littleImg.appendChild(img5);

    var img6 = new Image;
    img6.src = "data:img/jpg;base64," + img.img6;
    littleImg.appendChild(img6);
}

function formatReal(valor){
    return (valor.toLocaleString("pt-br", {
        style:"currency",
        currency: "brl"
    }));
}