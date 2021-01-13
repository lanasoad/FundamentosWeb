/*O js é uma linguagem de case sensitive (difere maiúsculas de minúsculas).
É possível acessar o DOM pelos métodos:
- por tag: getElementByTagName()
- por ID: getElementById()
- por nome: getElementsByName()
- por classe: getElementsByClassName()
- por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length <= 2) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'brown'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'brown'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }    
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Escreva um texto com, no máximo, 100 caracteres.'
        txtAssunto.style.color = 'brown'
        txtAssunto.style.display = 'block'
    } else 
        txtAssunto.style.display = 'none'
        assuntoOk = true
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso.')
    } else {
        alert ('Formulário não enviado. Verifique se todos os campos foram preenchidos corretamente.')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}