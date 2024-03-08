function ajustaTamanho() {
    // captação das dimensões do jogo 
    h = window.innerHeight
    l = window.innerWidth
}

function iniciarJogo() {
    // início do jogo 
    document.getElementById("container").style.display = "none"
    var dificuldade = document.getElementById("dificuldade").value
    console.log(dificuldade)
    gerarMosquito()
}

function gerarMosquito() {

    // geração das coordenadas
    var coordY = Math.floor(Math.random() * h)
    var coordX = Math.floor(Math.random() * l)

    // criar o elemento HTML
    var mosquito = document.createElement("img")
    mosquito.src = "imagens/mosquito.png"
    mosquito.width = "50"
    mosquito.height = "50"
    mosquito.style.position = 'absolute'
    mosquito.style.marginLeft = `${coordX}px`
    mosquito.style.marginTop = `${coordY}px`
    mosquito.onclick = gerarMosquito
    document.body.appendChild(mosquito)
}

// Definir altura e largura
h = window.innerHeight
l = window.innerWidth
