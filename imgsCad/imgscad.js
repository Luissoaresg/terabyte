document.addEventListener('DOMContentLoaded', function(){
    const srtUrl = window.location.search;
    const paramUrl = new URLSearchParams(srtUrl);
    const id = paramUrl.get("id");
    document.getElementById("id").value = id;
    getImgs(id);
    getProd(id);
});

function getImgs(id){
    fetch("http://localhost:8080/imgsCad/" + id)
    .then(response => response.json())
    .then(image => inputImgs(image))
    .catch(error => console.log("Ocorreu um erro ao buscar imagens: " + error));
}

function getProd(id){
    fetch("http://localhost:8080/pagcompra/" + id)
    .then(response => response.json())
    .then(prod => inputPag(prod))
    .catch(error => console.log("Ocorreu um erro ao buscar produto: " + error));
}


function inputPag(produto){
    var newRow      = document.createElement("tr");
    var colId       = document.createElement("td");
    var colImg      = document.createElement("td");
    var colDescri   = document.createElement("td");
    var colPreco    = document.createElement("td");
    var colTipo     = document.createElement("td");

    colId.classList.add("col-id");
    colId.innerText = produto.id;

    var img = new Image();
    img.src = "data:img/jpg;base64," + produto.img;
    colImg.appendChild(img);

    colDescri.classList.add("col-descri");
    colDescri.innerText = produto.descri;

    colPreco.classList.add("col-preco");
    colPreco.innerText = "R$ " + produto.preco;

    colTipo.classList.add("col-tipo");
    if(produto.tipo == 1){
        colTipo.innerText = "Mais Vendidos";
    } else if (produto.tipo == 2){
        colTipo.innerText = "Lançamentos";
    }

    newRow.appendChild(colId)
    newRow.appendChild(colImg)
    newRow.appendChild(colDescri)
    newRow.appendChild(colPreco)
    newRow.appendChild(colTipo)

    document.querySelector("tbody").appendChild(newRow);
}