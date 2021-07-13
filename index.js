function clicarok() {




    if (usuario.value !== "1234"){
        window.alert("Usuário inválido!")
        return;}
    if (usuario.value == "1234")

        if (senha.value !== "9999"){
            window.alert("Senha incorreta!")
            return;}
    if (senha.value == "9999")
        window.alert("Acesso permitido!")
        return


}
//else if(senha != senhaSecreta2){
//window.alert("Senha incorreta")
//}
//else if (senha == senhaSecreta2){
//window.alert("Acesso permitido")
//}