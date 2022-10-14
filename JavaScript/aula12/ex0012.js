var hora = new Date().getHours()
var minutos = new Date().getMinutes()
console.log(`Agora são exatamente ${hora}h${minutos}min`)
if (hora < 12){
    console.log("Bom dia!")
} else if (hora < 18){
    console.log("Boa tarde")
}else {
    console.log("Boa noite!")
}
