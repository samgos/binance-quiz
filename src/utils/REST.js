const BINANCE_ENDPOINT = 'http://cors-anywhere.herokuapp.com/https://api.binance.vision/api/glossaries/'

export async function getQuestions() {
  return await fetch(BINANCE_ENDPOINT,
    {  method: 'GET' })
    .then(response =>
      response.json())
    .catch(console.log)
}
