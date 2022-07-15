let clube = {}
  
  function registerClube() {
    clube.name = prompt("Qual o nome do clube?")
    clube.foundation = prompt("Qual o ano de fundação do "+clube.name+" ?")
    clube.apelido = prompt("Qual o apelido do "+clube.name+" ?")
    clube.country = prompt("De que país o "+clube.name+"é?")
    clube.stadium = prompt("Qual o nome do estádio do "+clube.name+" ?")
    clube.crowd = prompt("Qual o nome da principal torcida do "+clube.name+" ?")
    alert("Clube registrado!")
  }
  
  function registerJogador() {
    let playerName = prompt("Qual o nome do jogador?")
    let playerApelido = prompt("Qual o apelido do jogador?")
    let playerNum = Number(prompt("Qual era o número do jogador?"))
    let playerPos = prompt("Qual era a posição do jogador?")
    clube.historicPlayer = new Array(playerName,playerPos,playerApelido,"Camisa "+playerNum)
    alert("Jogador adicionado!")
  }

function registerTitulos() {
  let mundiais = prompt("Quantos mundiais o "+clube.name+" conquistou?")
  let ucl = prompt("Quantas champions o "+clube.name+" conquistou?")
  let libertadores = prompt("Quantas libertadores o "+clube.name+" conquistou?")
  let brasileirao = prompt("Quantos brasileirões o "+clube.name+" conquistou?")
  clube.cups = new Array("Mundiais: "+mundiais+" | Champions: "+ucl+" | Libertadores: "+libertadores+" | Brasileirão: "+brasileirao)
  alert("Títulos registrados")
}
  
  function myMenu() {
    let chosenOption 
    do {
      chosenOption = prompt("O que deseja fazer?"+"\n1- Registrar jogador histórico"+"\n2- Registrar títulos conquistados"+"\n3- Sair")
      switch(chosenOption) {
        case "1":
          registerJogador()
          break
        case "2":
          registerTitulos()
          break
      }
    } while(chosenOption != 3)
  }
  
  registerClube()
  myMenu()
  alert("Clube: "+clube.name+"\nAno de fundação: "+clube.foundation+"\nApelido: "+clube.apelido+"\nPaís: "+clube.country+"\nEstádio: "+clube.stadium+"\nTorcida principal: "+clube.crowd+
        "\n\n"+"Jogador histórico: "+clube.historicPlayer+"\n\n"+
        "Títulos: "+clube.cups)