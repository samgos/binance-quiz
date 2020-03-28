import React, { Fragment, useState, useContext, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import { getQuestions } from './utils/REST'
import { store } from './state'

import Loader from './assets/components/loader'
import Question from './pages/question'
import Start from './pages/start'

import './assets/css/main.css'

const qmetadata = {
  options: [ 'Choice 1', 'Choice 2', 'Choice 3', 'Choice 4', 'Choice 5'],
  excerpt: 'What is the first choice?',
  answer: 'Choice 1'
}

const delay = ms => new Promise(res => setTimeout(res, ms))

function App() {
  const [ quizPhase, setPhase ] = useState(<Loader />)
  const [ qIndex, setIndex ] = useState(0)

  let { state, dispatch } = useContext(store)

  const setQuestion = (index) => {
    setPhase(<Question index={index} next={() => nextQuestion(index)} />)
  }

  const nextQuestion = async(index) => {
    let questionIndex = index + 1
    await setQuestion(questionIndex)
  }

  useEffect(() => {
    const callQuiz = async() => {
      const metadata = await getQuestions()
      await delay(7500)

      setPhase(<Start next={() => setQuestion(0)}/>)

      await dispatch({
        payload: metadata,
        type: 'INIT'
      })
    }
    callQuiz()
  }, [ ])

  return (
    <main>
      <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        {quizPhase}
      </Grid>
    </main>
  );
}

export default App
