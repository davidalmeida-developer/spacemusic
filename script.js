var br1= 'https://ia801507.us.archive.org/4/items/chega-e-senta/CHEGA%20E%20SENTA.mp3'
var br2= 'https://archive.org/download/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/Matu%C3%AA%20%E2%80%93%20QUER%20VOAR%20%28%C3%81udio%20Oficial%29_50k.mp3'
var br3= 'https://archive.org/download/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/MEU%20PEDA%C3%87O%20DE%20PECADO%20-%20Jo%C3%A3o%20Gomes%20-%20T%C3%B4%20Querendo%20te%20beijar%20de%20Novo%20%28AUDIO%20E%20LETRA%29_50k.mp3'
var br4= 'https://archive.org/download/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/Henrique%20e%20Juliano%20-%20ARRANH%C3%83O%20-%20DVD%20Manifesto%20Musical_50k.mp3'
var br5= 'https://archive.org/download/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/ROL%C3%8A%20-%20Tarc%C3%ADsio%20do%20Acordeon%20e%20Marcynho%20Sensa%C3%A7%C3%A3o%20%28Vai%20beber%2C%20vai%20chorar%2C%20vai%20ligar%29_50k.mp3'
var br6= 'https://archive.org/download/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/Z%C3%A9%20Neto%20e%20Cristiano%20-%20VOC%C3%8A%20BEBERIA%20OU%20N%C3%83O%20BEBERIA_%20-%20DVD%20Chaaama_50k.mp3'
var br7= 'https://archive.org/download/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/MC%20Anjim%20-%20Bala%20Love%20%28Letra%29%20%28oh%2C%20a%20cara%20de%20tralha%20que%20ela%20gosta%29_50k.mp3'
var br8= 'https://archive.org/download/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/Luan%20Santana%20-%20MORENA%20%28Clipe%20Oficial%29_50k.mp3'
var br9= 'https://ia601502.us.archive.org/33/items/ze-neto-e-cristiano-ela-e-ela-dvd-chaaama-50k/Z%C3%A9%20Neto%20e%20Cristiano%20-%20ELA%20E%20ELA%20-%20DVD%20Chaaama_50k.mp3'
var br10='https://ia601508.us.archive.org/2/items/mc-anjim-bala-love-letra-oh-a-cara-de-tralha-que-ela-gosta-50k/Gusttavo%20Lima%20-%20Ficha%20Limpa%20-%20Falando%20de%20Amor_50k.mp3'
var audio= document.getElementById('audio')
var posicao= document.getElementById('playlist')
var teste2= []
var music= ""
var id= ""
audio.addEventListener('ended', next)
audio.addEventListener('play', fcor)
var i= 0
var h= 0
var cor= ''
var li= document.getElementsByTagName('li')
function volume() {
    var vol= document.getElementById('volume')
    audio.volume= vol.value
}

function mudaCor() {
    cor.style= "background-color: white; color: black; font-weight: small;"
    
}

function next() {
    mudaCor();
    i++
    playl()
}
function last() {
    mudaCor();
    i--
    playl()
}

function playl() {
    if(i< teste2.length && i >= 0){
        audio.src= teste2[i]
        audio.play()
    } else if (i<0) {
        i= teste2.length -1
        audio.src= teste2[i]
        audio.play()
    } else if(audio.paused == true){
        audio.play()
    } else {
        i=0
        audio.src= teste2[i]
        audio.play()

    } 
}



function pause() {
    if(audio){
        audio.pause()
    } else{
        audio.play()
    }
}

function fcor(){
    if(audio.src == br1){
            cor= document.getElementById('br1')
            cor.style= "background-color: blue; color: white; font-weight: normal;"}  
    else if(audio.src == br2){
        cor= document.getElementById('br2')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br3){
        cor= document.getElementById('br3')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br4){
        cor= document.getElementById('br4')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br5){
        cor= document.getElementById('br5')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br6){
        cor= document.getElementById('br6')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br7){
        cor= document.getElementById('br7')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br8){
        cor= document.getElementById('br8')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br9){
        cor= document.getElementById('br9')
        cor.style= "background-color: blue; color: white; font-weight: normal;"}     
    else if(audio.src == br10){
        cor= document.getElementById('br10')
        cor.style= "background-color: blue; color: white; font-weight: normal;"} 
         
}
                

function adbr1() {
    if(teste2.indexOf(br1) == -1){
    var musicname= 'Chega e Senta'
    teste2.push(br1)
    posicao.innerHTML+= `<li id="br1">${musicname}</li>`}
    
}
function adbr2() {
    if(teste2.indexOf(br2) == -1){
    var musicname= 'Quer Voar'
    teste2.push(br2)
    posicao.innerHTML+= `<li id="br2">${musicname}</li>`
    } 
     
}


function adbr3() {
    if(teste2.indexOf(br3) == -1){
        var musicname= 'Meu Pedaço de Pecado'
        teste2.push(br3)
        posicao.innerHTML+= `<li id="br3">${musicname}</li>`
    }
}

function adbr4() {
    if(teste2.indexOf(br4) == -1){
        var musicname= 'Arranhão'
        teste2.push(br4)
        posicao.innerHTML+= `<li id="br4">${musicname}</li>`
    }
}


function adbr5() {
    if(teste2.indexOf(br5) == -1){
        var musicname= 'Rolê'
        posicao.innerHTML+= `<li id="br5">${musicname}</li>`
        teste2.push(br5)
        }
    }
    function adbr6() {
    if(teste2.indexOf(br6) == -1){
        var musicname= 'Você Beberia ou Não Beberia?'
        posicao.innerHTML+= `<li id="br6">${musicname}</li>`
        teste2.push(br6)}
    }
    function adbr7() {
        if(teste2.indexOf(br7) == -1){
            var musicname= 'Bala Love'
            posicao.innerHTML+= `<li id="br7">${musicname}</li>`
        teste2.push(br7)}
    }
    function adbr8() {
        if(teste2.indexOf(br8) == -1){
            var musicname= 'Morena'
            posicao.innerHTML+= `<li id="br8">${musicname}</li>`
            teste2.push(br8)}
        }
    function adbr9() {
        if(teste2.indexOf(br9) == -1){
            var musicname= 'Ela e Ela'
    posicao.innerHTML+= `<li id="br9">${musicname}</li>`
    teste2.push(br9)}
    }

    function adbr10() {
        if(teste2.indexOf(br10) == -1){
        var musicname= 'Ficha Limpa'
        posicao.innerHTML+= `<li id="br10">${musicname}</li>`
        teste2.push(br10)
        }
    }


function adicionarPlaylist(){
    adbr1()
    adbr2()
    adbr3()
    adbr4()
    adbr5()
    adbr6()
    adbr7()
    adbr8()
    adbr9()
    adbr10()
}


function del(music, id){
    
    teste2.splice(teste2.indexOf(music), 1)
    var node= document.getElementById(id)
    node.parentNode.removeChild(node)
}