function getTable() {
  fetch(url)
    .then((response) => response.json())
    .then((produtos) => tableInsert(produtos));
}

function hiddenButtons() {
  if (hidden) {
    btnCad.classList.toggle("visually-hidden");
    btnEdit.classList.toggle("visually-hidden");
    btnCancel.classList.toggle("visually-hidden");
    btnRemove.classList.toggle("visually-hidden");
    hidden = true;
  }
}

btnCancel.addEventListener("click", function () {
  hidden = true;
  hiddenButtons();
});

function editMoney(real) {
  let valueFormatted = real.replace(/[^0-9.]/g, "");
  return valueFormatted;
}

function alerta() {
  if (
    img.value.trim() === "" ||
    descri.value === "" ||
    preco.value === "" ||
    tipoMais.value === "" ||
    tipoLan.value === ""
  ) {
    alert("Preencha todos os campos para realizar o cadastro do produto!");
    return true;
  }
}
