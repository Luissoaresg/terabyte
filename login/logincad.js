// Variaveis, Funções e eventos para troca de formularios.
// let divForm = document.getElementById("form");
// let divIncri = document.getElementById("inscricao");

let btnLogin = document.querySelector(".submit");
// let btnSubmit = document.querySelector(".submit2");
// let btnCadUser = document.getElementById("cad");
// let btnLoginUser = document.getElementById("cad2");

// hiddens = true;

// function hiddenForms(){
//     if(hiddens){
//         divForm.classList.toggle("visually-hidden");
//         divIncri.classList.toggle("visually-hidden");
//         hiddens = true;
//     }
// }

// btnCadUser.addEventListener("click", function(e){
//     e.preventDefault()

//     hiddens = true;
//     hiddenForms();
// })

// btnLoginUser.addEventListener("click", function(e){
//     e.preventDefault()

//     hiddens = true;
//     hiddenForms();
// })

// Função de POST.
btnLogin.addEventListener("click",function(e){
    e.preventDefault();

    fetch("http://localhost:8080/login",{
        method:"POST",
        headers: {
            'Aceept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": document.getElementById("email").value,
            "password": document.getElementById("password").value
        })
    })
    .then(response => response.json())
    .then(user => userLogin(user));
})

function userLogin(user){
    if(user != null){
        window.location.href = "http://127.0.0.1:5500/cadastrar.html";
    } else {
        alert("Usuario não cadastrado!");
    }
}
