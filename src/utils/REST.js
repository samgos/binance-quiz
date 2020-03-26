const BINANCE_ACADEMY_ENDPOINT = 'https://api.binance.vision/api/glossaries/'

export async function getQuestions() {
  return await fetch(BINANCE_ACADEMY_ENDPOINT,
    {  method: 'GET',
       mode: 'no-cors' })
    .then(response =>
      response.json())
    .then(result =>
      result.data)
    .catch(console.log)
}
