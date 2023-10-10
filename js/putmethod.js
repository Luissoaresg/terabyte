btnEdit.addEventListener("click", function () {
  putMethod();
});

function putMethod() {
  const formData = new FormData(form);
  fetch(url, {
    method: "PUT",
    body: formData,
  })
    .then((response) => response.json())
    .then((prod) => update(prod));
}

function update(prod) {
  var ids = document.querySelectorAll(".col-id");
  for (var i = 0; i < ids.length; i++) {
    if (id.value == ids[i].innerText) {
      var row = ids[i].closest("tr");
      row.querySelector(".col-descri").innerText = prod.descri;
      row.querySelector(".col-preco").innerText = prod.preco;
      row.querySelector("img").src = "data:img/jpg;base64," + prod.img;

      if (prod.tipo == 1) {
        row.querySelector(".col-tipo").innerText = "Mais Vendidos";
      } else if (prod.tipo == 2) {
        row.querySelector(".col-tipo").innerText = "Lançamentos";
      }
    }
  }
  form.reset();
  hidden = true;
  hiddenButtons();
}