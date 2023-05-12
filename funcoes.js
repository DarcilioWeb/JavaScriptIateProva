function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'http://prj-p2-js.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(obj) {

    var inserir = $.ajax({

        url: 'http://prj-p2-js.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

function excluirMensagem(idMsg) {

    var inserir = $.ajax({

        url: 'http://prj-p2-js.herokuapp.com/mensagens' + '/' + toString(idMsg),
        method: 'DELETE',
        async: false
    });
}

function validarUsuario(objLoginSenha) {

    //email: admin@admin.com
    //senha: '1234'

    var retorno = false;

    var consulta = $.ajax({
        url: 'http://prj-p2-js.herokuapp.com/usuarios/validar',
        method: 'GET',
        dataType: 'json',
        async: false,
        data: JSON.stringify(objLoginSenha),
        contentType: 'application/json'
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}