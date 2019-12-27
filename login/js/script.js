function validarUsuario(){
    var usuario = fomulario.user.value;
    var senha = fomulario.senha.value;

    if(usuario == ""){
        alert("Preencha o campo usuário.");
        fomulario.user.focus();
        return false;
    }
    if(senha == ""){
        alert("Preencha o campo senha.");
        fomulario.senha.focus();
        return false
    }

}

// // validar o email
// if(email == "" || email.indexOf("@") == -1 || document.dados.email.indexOf(".")==-1){
//     alert("Preencha o campo email.");
//     fomulario.email.focus();
//     return false;
// }