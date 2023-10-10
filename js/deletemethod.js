btnRemove.addEventListener("click", function (e) {
  e.preventDefault();

  if (id.value != "" && id.value > 0) {
    if (confirm("Deseja remover?")) {
      fetch(url + id.value, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((prod) => removeRow(prod));
    } else {
      form.reset();
      hidden = true;
      hiddenButtons();
    }
  } else {
    alert("Id invalido!");
  }
});

function removeRow(prod) {
  alert("Produto removido com sucesso! " + prod.descri);

  var ids = document.getElementsByClassName("col-id");

  for (var i = 0; i < ids.length; i++) {
    if ((id.value = ids[i].innerText)) {
      var row = ids[i].closest("tr");
      row.remove();
      form.reset();
      hidden = true;
      hiddenButtons();
    }
  }
}
