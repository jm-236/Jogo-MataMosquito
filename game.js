function ajustaTamanho() {
    // captação das dimensões do jogo 
    h = window.innerHeight
    l = window.innerWidth
}

function tamanhoAleatorio() {

    tam = Math.floor(Math.random() * 3)
    switch (tam){
        case 0:
            return 50

        case 1:
            return 75

        case 2:
            return 100
    }
}

function iniciarJogo() {
    // início do jogo 
    document.getElementById("container").style.display = "none"
    var dificuldade = document.getElementById("dificuldade").value
    window.location.href = "jogo.html";
}

function ladoAleatorio() {
    return Math.floor(Math.random() * 2) == 0 ? "ScaleX(-1)" : "ScaleX(1)"
}

function gerarMosquito() {
    if (document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
        
        if (vidas > 0){
        document.getElementById(`v${vidas}`).src = "imagens/coracao_vazio.png"
        vidas--;
        }
    }


    var tam = tamanhoAleatorio()
    // geração das coordenadas
    var coordY = Math.floor(Math.random() * h)
    var coordX = Math.floor(Math.random() * l)
    coordX -= tam
    coordY -= tam
    coordY = coordY < 0 ? 0 : coordY
    coordX = coordX < 0 ? 0 : coordX

    // criar o elemento HTML
    var mosquito = document.createElement("img")
    mosquito.src = "imagens/mosquito.png"
    mosquito.id = "mosquito"
    mosquito.width = tam
    mosquito.height = tam
    mosquito.style.transform = ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.marginLeft = `${coordX}px`
    mosquito.style.marginTop = `${coordY}px`
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}

// Definir altura e largura
h = window.innerHeight
l = window.innerWidth
var vidas = 3