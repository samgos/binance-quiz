const BINANCE_ENDPOINT = 'http://cors-anywhere.herokuapp.com/https://api.binance.vision/api/glossaries/'

export async function getQuestions() {
  let questions = await fetch(BINANCE_ENDPOINT,
    {  method: 'GET' })
    .then(response =>
      response.json())
    .catch(console.log)
  return randomiseQuestions(questions, {})
}

 function randomiseQuestions(metadata, io) {
  while(Object.entries(io).length < 10){
    io = pluckQuestion(io, metadata)
  } return io
}

function pluckQuestion(existing, raw) {
  let meta = randomIndex(raw)

  if(existing[meta.slug] == undefined){
    existing[meta.slug] = {
      excerpt: meta.excerpt,
      answer: meta.title,
      ...getOptions(meta, raw)
    }
  } return existing
}

function getOptions(main, raw){
  let random = Math.floor(Math.random() * 5)
  let options = []

  while(options.length < 5){
    let meta = randomIndex(raw)
    options.push(meta.title)
  }

  options[random] = main.title

  return {
    options
  }
}

function randomIndex(array){
  var index = Math.floor(Math.random() * (array.length -1))
  return array[index++]
}
