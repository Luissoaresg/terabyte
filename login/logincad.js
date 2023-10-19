let divForm = document.getElementById("form");
let divIncri = document.getElementById("inscricao");

let btnLogin = document.querySelector(".submit");
let btnSubmit = document.querySelector(".submit2");
let btnCadUser = document.getElementById("cad");
let btnLoginUser = document.getElementById("cad2");

hiddens = true;

function hiddenForms(){
    if(hiddens){
        divForm.classList.toggle("visually-hidden");
        divIncri.classList.toggle("visually-hidden");
        hiddens = true;
    }
}

btnCadUser.addEventListener("click", function(e){
    e.preventDefault()

    hiddens = true;
    hiddenForms();
})

btnLoginUser.addEventListener("click", function(e){
    e.preventDefault()

    hiddens = true;
    hiddenForms();
})