 //VARIAVEIS=> um espaço na memoria que guardamos algo (um numero,letra ou texto)
 // FUNÇÃO => um trecho de código que só é executado quando é chamado 
 
 let chave  = "cebcd482eda57fa9a6714c1c2ba91885"


  function colocarnatela(dados) {

    console.log(dados)
    document.querySelector(".cidade").innerHTML = "tempo em "+ dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp )+"°C" ,
    document.querySelector(".descricao").innerHTML = dados.weather[0].description ,
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png" 
    document.querySelector(".umidade").innerHTML = " Umidade: "  +  (dados.main.humidity) +  "%"
   
   } 


async function buscarcidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="  +
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +  
    "&units=metric"
    )
    
    .then(resposta => resposta.json())

    colocarnatela(dados)
    
 }


 function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)

 }