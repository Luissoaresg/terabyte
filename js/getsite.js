function getdados() {
  fetch("http://localhost:8080/")
    .then(response => response.json())
    .then(produtos => inputSite(produtos));
}

function inputSite(produtos) {
  produtos.forEach((p) => {
    if (p.tipo == 1) {
      document.getElementById("mais-vendidos").appendChild(insertProd(p));
    } else if (p.tipo == 2) {
      document.getElementById("lancamentos").appendChild(insertProd(p));
    }
  });
}

function insertProd(p) {
  var divProduto = document.createElement("div");
  divProduto.classList.add("div-produto");

  var img = document.createElement("img");
  img.src = "data:img/jpg;base64," + p.img;
  var link = document.createElement("a");
  link.setAttribute("href", "/pagcompra/?id=" + p.id);
  link.setAttribute("target", "_blank");
  link.appendChild(img);
  divProduto.appendChild(link);
  // divProduto.appendChild(img);


  var TextDescri = document.createElement("p");
  TextDescri.classList.add("p-descri-produto");
  TextDescri.innerText = p.descri;
  divProduto.appendChild(TextDescri);

  var text1 = document.createElement("p");
  text1.classList.add("p-valor");
  text1.innerHTML = "<s>De: R$" + p.preco.toFixed(2) + "por:</s>";
  divProduto.appendChild(text1);

  var text2 = document.createElement("p");
  text2.classList.add("p-a-vista");
  text2.innerHTML =
    "R$" +
    (p.preco * 0.5).toFixed(2) +
    '<span class="span-a-vista">à vista</span>';
  divProduto.appendChild(text2);

  var text3 = document.createElement("P");
  text3.classList.add("p-parcelado");
  text3.innerHTML = "12x de R$" + (p.preco / 12).toFixed(2) + "sem juros";
  divProduto.appendChild(text3);

  return divProduto;
}
getdados();
