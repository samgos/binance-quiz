import React, { useState, useContext, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import { getQuestions } from './utils/REST'
import { store } from './state'

import Loader from './assets/components/loader'
import Question from './pages/question'
import Start from './pages/start'

import './assets/css/main.css'

const qmetadata = {
  options: [ 'Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
  excerpt: 'What is the first choice?',
  answer: 'Choice 1'
}

function App() {
  const [ quizPhase, setPhase ] = useState(<Loader />)
  let { state, dispatch } = useContext(store)

  const progressStage = () => {
    setPhase(<Question metadata={qmetadata} />)
  }

  useEffect(() => {
    const callQuiz = async() => {
      const metadata = await getQuestions()

      setPhase(<Start next={progressStage}/>)

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
