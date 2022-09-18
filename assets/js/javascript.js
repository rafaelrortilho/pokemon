const respostas = document.querySelector("#resposta")

  const respostas = [
  "Pokemon não encontrado.",
  "Adicionado com sucesso.",
  ]


  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  console.log(numeroAleatorio)

  function adicionar() {

    const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  console.log(respostas[numeroAleatorio])
  }