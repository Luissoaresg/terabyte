getTable();

function tableInsert(produtos){
    produtos.forEach(produto => {
        insertProd(produto)
    });
}

function insertProd(produto){
    
    var newRow      = document.createElement("tr");
    var colId       = document.createElement("td");
    var colImg      = document.createElement("td");
    var colDescri   = document.createElement("td");
    var colPreco    = document.createElement("td");
    var colTipo     = document.createElement("td");
    var colSelect   = document.createElement("td");

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

    var selectButton = document.createElement("button");
    selectButton.classList.add("btn", "btn-success");
    selectButton.innerText = "Selecionar";
    colSelect.appendChild(selectButton);

    newRow.appendChild(colId)
    newRow.appendChild(colImg)
    newRow.appendChild(colDescri)
    newRow.appendChild(colPreco)
    newRow.appendChild(colTipo)
    newRow.appendChild(colSelect)

    document.querySelector("tbody").appendChild(newRow);

    select(selectButton);
}