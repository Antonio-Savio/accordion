const setas = document.getElementsByClassName('seta')
const question = document.getElementsByClassName('question-div')

Array.from(question).forEach((question) => question.addEventListener('click', abrirFecharResposta))

function abrirFecharResposta(){
    const aberto = document.querySelector('.aberto')

    resetarSeta()

    abrirResposta(this)

    fecharResposta(this, aberto)
}


function resetarSeta(){
    Array.from(setas).forEach((seta) => seta.setAttribute('src', 'src/images/icone-seta-fechada.png'))
}

function abrirResposta(isto){
    isto.closest('li').classList.add('aberto')

    isto.lastElementChild.setAttribute('src', 'src/images/icone-seta-aberta.png')
}

function fecharResposta(isto, classeAberto){
    if (classeAberto){
        classeAberto.classList.remove('aberto')
    }
    
    if (!isto.closest('li').classList.contains('aberto')){
        Array.from(setas).forEach((seta) => seta.setAttribute('src', 'src/images/icone-seta-fechada.png'))
    }
}