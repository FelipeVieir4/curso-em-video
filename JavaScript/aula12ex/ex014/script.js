function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h ${min}min`
 
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.innerHTML = `<img src="img/manhã.png">`
        document.body.style.backgroundColor = "#c5d3dc"
        document.getElementById("section").style.backgroundColor =  "#dce0e0"
        document.getElementById("header").style.color = "black"
        document.getElementById("footer").style.color = "black"
    }else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.innerHTML = `<img src="img/tarde.png">`
        document.body.style.backgroundColor = "#736047"
        document.getElementById("section").style.backgroundColor =  "#f0e68c"
    }else{
        //Boa noite!
        img.innerHTML = `<img src="img/noite.png">`
    }
}
