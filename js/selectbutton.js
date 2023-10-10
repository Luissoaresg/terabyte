function select(btn) {
  btn.addEventListener("click", function () {
    var tr = this.closest("tr");
    id.value = tr.querySelector(".col-id").innerText;
    descri.value = tr.querySelector(".col-descri").innerText;
    preco.value = editMoney(tr.querySelector(".col-preco").innerText);

    if (tr.querySelector(".col-tipo").innerText == "Mais Vendidos") {
      document.getElementById("vendidos").checked = true;
    } else if (tr.querySelector(".col-tipo").innerText == "Lançamentos") {
      document.getElementById("lancamentos").checked = true;
    }
    hiddenButtons();
    hidden = true;
  });
}
