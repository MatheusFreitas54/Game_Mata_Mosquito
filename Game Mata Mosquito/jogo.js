var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
    //2 segundos
    criarMosquitoTempo = 2000
} else if(nivel === 'normal'){
    //1,5 segundos
    criarMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    //1 segundo
    criarMosquitoTempo = 1000
} else if(nivel === 'chucknorris'){
    //0,75 segundos
    criarMosquitoTempo = 750
} else if(nivel === 'impossivel'){
    //0,5 segundos
    criarMosquitoTempo = 500
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandomica() {

    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //console.log('elemento selecionado foi: v' + vidas)
        if(vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
    }

    //Math.random gera um número aleatorio entre 0 e 1
    //Math.floor aredonda o valor gerado
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90


    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criando o elemento html img
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

    // Controle do resultado de aleatoriedade
    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}


