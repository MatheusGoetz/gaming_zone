function topo(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

function login(){
  let logado = 0;
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if(usuario == "admin" && senha == "123456"){
    window.location = "index.html";
    logado = 1;
  }

  if(logado == 0) {
    alert("Usuário ou senha inválidos!");
    return false;
  }
}

function cadastro(){
  alert("Cadastro realizado com sucesso!");
  window.location = "index.html";
}
