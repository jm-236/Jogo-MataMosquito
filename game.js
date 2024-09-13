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
    var dificuldade = document.getElementById("dificuldade").value
    if (dificuldade === ""){
        alert("Selecione um nível para iniciar o jogo.")
        return false
    } 

    window.location.href = `jogo.html?${dificuldade}`;
}

function ladoAleatorio() {
    return Math.floor(Math.random() * 2) == 0 ? "ScaleX(-1)" : "ScaleX(1)"
}

function gerarMosquito() {
    document.getElementById("tempo").innerHTML = `Tempo restante: ${tempo} segundos`
    if (tempo == 0){
        window.location.href = "vitoria.html"
    }

    if (document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
        
        if (vidas > 0){ // diminuição da vida do player
        document.getElementById(`v${vidas}`).src = "imagens/coracao_vazio.png"
        vidas--;
        if (vidas == 0){
            window.location.href = "gameover.html"
        }
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
        // document.getElementById("tapa").play()
    }
    document.body.appendChild(mosquito)
}



// Definir altura e largura
var h = window.innerHeight
var l = window.innerWidth
var vidas = 3
var dificuldade = window.location.search
dificuldade = dificuldade.replace("?", "")

switch (dificuldade){
    case "facil":
        tempo = 30
        intervalo = 2000
        break
    case "normal":
        tempo = 60
        intervalo = 1000
        break
    case "dificil":
        tempo = 90
        intervalo = 750
        break
}


document.addEventListener("click", function() {
    audio = document.getElementById("tapa")
    audio.currentTime = 0;  // Reinicia o áudio
    audio.play();
});


window.onload = function() {
    var audio = document.getElementById("barulhomosquito");
    audio.muted = true;  // Inicia mudo
    audio.play();
    audio.loop = true;

    setTimeout(function() {
        audio.muted = false;  // Desmuta o áudio após um pequeno atraso
    }, 1000);  // 1 segundo de atraso
};
