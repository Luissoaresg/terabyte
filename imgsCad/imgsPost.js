document.querySelector("form").addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this);
    fetch("http://localhost:8080/imgsCad/", {
        method:"POST",
        body: formData
    })
    .then(response => response.json())
    .then(imagem => inputImgs(imagem))
    .catch(error => console.log("Error ao cadastrar imagens: " + error));
})

function inputImgs(img){

    var newRow = document.createElement("tr");
    var colum1 = document.createElement("td");
    var colum2 = document.createElement("td");
    var colum3 = document.createElement("td");
    var colum4 = document.createElement("td");
    var colum5 = document.createElement("td");
    var colum6 = document.createElement("td");

    var img1 = new Image;
    img1.src = "data:img/jpg;base64," + img.img1;
    colum1.appendChild(img1);

    var img2 = new Image;
    img2.src = "data:img/jpg;base64," + img.img2;
    colum2.appendChild(img2);

    var img3 = new Image;
    img3.src = "data:img/jpg;base64," + img.img3;
    colum3.appendChild(img3);

    var img4 = new Image;
    img4.src = "data:img/jpg;base64," + img.img4;
    colum4.appendChild(img4);

    var img5 = new Image;
    img5.src = "data:img/jpg;base64," + img.img5;
    colum5.appendChild(img5);

    var img6 = new Image;
    img6.src = "data:img/jpg;base64," + img.img6;
    colum6.appendChild(img6);

    newRow.appendChild(colum1);
    newRow.appendChild(colum2);
    newRow.appendChild(colum3);
    newRow.appendChild(colum4);
    newRow.appendChild(colum5);
    newRow.appendChild(colum6);

    document.getElementById("table-imgs").appendChild(newRow);
}