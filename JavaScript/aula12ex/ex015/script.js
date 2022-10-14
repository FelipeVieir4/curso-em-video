function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var resultado = document.querySelector("div#resultado");

  //se campo vazio            //se campo maior que ano atual ou zero
  if (fAno.value.length == 0 || fAno.value > ano || fAno.value == 0) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Masculino";
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src","img/criança_m.png")
      } else if (idade < 30) {
        img.setAttribute("src","img/jovem_m.png")
      } else if (idade < 50) {
        img.setAttribute("src","img/adulto_m.png")
      } else {
        img.setAttribute("src","img/idoso_m.png")
      }
    } else if (fsex[1].checked) {
      genero = "Feminino";
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src","img/criança_f.png")
      } else if (idade < 30) {
        img.setAttribute("src","img/jovem_f.png")
      } else if (idade < 50) {
        img.setAttribute("src","img/adulto_f.png")
      } else {
        img.setAttribute("src","img/idosa_f.png")
      }
    }
    resultado.style.textAlign = "center";
    resultado.innerHTML = `Dedectamos ${genero} com ${idade} anos`;
    resultado.appendChild(img)
  }
}
