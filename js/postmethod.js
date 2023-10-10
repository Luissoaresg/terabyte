document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!alerta()) {
    const formData = new FormData(this);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((resposta) => resposta.json())
      .then((produto) => insertProd(produto))
      .catch((error) =>
        console.log("Ocorreu um erro ao cadastrar o produto! (" + error + ")")
      );
  }
});
