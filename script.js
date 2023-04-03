function verificar() {                                // cria a função de nome 'verificar()'
  let data = new Date()                               // instancia um objeto Date() e atribui a variável 'data'
  let ano = data.getFullYear()                        // pega o ano do sistema e atribui a varável 'ano'
  let fano = document.getElementById('txtano')        // PEGA O QUE FOI DIGITADO NA CAIXA DE TEXTO
  let res = document.getElementById('res')            // LINKA AO TEXTO QUE VAI SER EXIBIDO O RESULTADO

  
  if (fano.value.length==0||Number(fano.value)>ano) { // verifica se o ano ta vazio ou se é maior que o ano atual
    alert('Verifique os dados e tente novamente')     // exibe um alerta em um pop up caso seja verdade
  } else {                                            // passado a verificação anterior, ele continua o fluxo
    let fsex = document.getElementsByName('radsex')   // linka os radio buttoms de mesmo nome e joga na variável fsex
    let idade = ano - Number(fano.value)              // subtrai o ano atual pelo ano digitado pra descobrir a idade
    let genero = ''                                   // cria a variável 'genero' que inicia vazia
    let img = document.createElement('img')           // cria uma imagem usando JS
    img.setAttribute('id', 'foto')                    // atrabui um id pra imagem criada anteriormente


    if (fsex[0].checked) {                            // confere se o primeiro radio buttom [0] está marcado
      genero = 'Homem'                                // se sim, atribui "Homem" pra variável genero 
      if (idade >= 0 && idade < 3) {                  // confere se a idade está entre 0 e 3 anos
        img.setAttribute('src', 'bebeH.jpg')          // atribui imagem do bebe homem
      } else if (idade < 12) {                        // confere se a idade está entre 3 e 11 anos
        img.setAttribute('src', 'criancaH.jpg')       // atribui imagem da criança homem
      } else if (idade < 18) {                        // confere se a idade está entre 12 e 17 anos
        img.setAttribute('src', 'adolescenteH.jpg')   // atribui imagem do adolescente homem
      } else if (idade < 50) {                        // confere se a idade está entre 18 e 49 anos
        img.setAttribute('src', 'adultoH.jpg')        // atribui imagem do adulto homem
      } else {                                        // confere se a idade é maior que 50 anos
        img.setAttribute('src', 'velhoH.jpg')         // atribui imagem do velho homem

      }
    }else if(fsex[1].checked){                        // confere se o segundo radio buttom [1] está marcado 
      genero = 'Mulher'                               // se sim, atribui "Mulher" pra variável genero
      if (idade >= 0 && idade < 3) {                  // confere se a idade está entre 0 e 3 anos
        img.setAttribute('src', 'bebeM.jpg')          // atribui imagem
      } else if (idade < 12) {                        // confere se a idade está entre 3 e 11 anos
        img.setAttribute('src', 'criancaM.jpg')       // atribui imagem
      } else if (idade < 18) {                        // confere se a idade está entre 12 e 17 anos
        img.setAttribute('src', 'adolescenteM.jpg')   // atribui imagem
      } else if (idade < 50) {                        // confere se a idade está entre 18 e 49 anos
        img.setAttribute('src', 'adultaM.jpg')        // atribui imagem
      } else {                                        // confere se a idade é maior que 50 anos
        img.setAttribute('src', 'velhaM.jpg')         // atribui imagem
      }
    }
    res.style.textAlign = 'center'                    // faz o res ser centralizado
    res.innerHTML=                                    // faz o res exibir os valores dos placeholders
    `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)                              // faz o res exibir uma (img) logo abaixo do texto anterior
  }
}