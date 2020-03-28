import React, { Fragment, useState, useContext, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import { getQuestions } from './utils/REST'
import { store } from './state'

import Loader from './assets/components/loader'
import Question from './pages/question'
import Score from './pages/score'
import Start from './pages/start'

import './assets/css/main.css'

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

    if(questionIndex < 10) await setQuestion(questionIndex)
    else setPhase(<Score />)
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
