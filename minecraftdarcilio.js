function validar() {

    var dado = {};
    dado.email = document.getElementById('emailadmin').value;
    dado.senha = document.getElementById('senhaadmin').value
    
    if (validarUsuario(dado) == true) {

        location.href="mensagens.html";
    } else {
        alert('Usuário e senha incorretos!');
    }

}
function enviarFormulario() {

    var dado2 = {};
    dado2.nome = document.getElementById('fname').value;
    dado2.email = document.getElementById('lname').value;
    dado2.mensagem = document.getElementById('dtextarea').value;

    console.log(dado2)

    inserirMensagem(dado2)
}
function ListarMensagens(){

    let obj = obterMensagens()
    console.log('obj', obj);
    var tbody = document.createElement('table');

    let concat = ''
    for(let i=0;i < obj.length; i++){
        let tr = tbody.insertRow();

        let td_nome = tr.insertCell();
        let td_email = tr.insertCell();
        let td_mensagem = tr.insertCell();

        td_nome.innertext = obj[i].nome
        td_email.innertext = obj[i].email
        td_mensagem.innertext = obj[i].mensagem
    }
    // console.log("tbody", tbody)
}
function ListarMensagens2(){
    let obj = obterMensagens()

    let root = document.getElementById('root')

    let tableBody = obj.map((mensagem) => {
        return `<tr style="border-style: solid;">
            <td style="border-style: solid;">${mensagem.nome}</td>
            <td style="border-style: solid;">${mensagem.email}</td>
            <td style="border-style: solid;">${mensagem.mensagem}</td>
        <tr>`    
    }).join('')

    let table = `<table style="border-style: solid;">
        <tr>
            <td style="border-style: solid;">Nome</td>
            <td style="border-style: solid;">email</td>
            <td style="border-style: solid;">mensagens</td>
        <tr>
        ${tableBody}
    </table>`;
    
    root.insertAdjacentHTML('beforeend',table)
}
