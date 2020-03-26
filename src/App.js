import React, { useState, useContext, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import { getQuestions } from './utils/REST'
import { store } from './state'

import Navigation from './assets/components/navigation'
import Question from './pages/question'
import Start from './pages/start'

import './assets/css/main.css'

function App() {
  const [ quizPhase, setPhase ] = useState(<div />)
  let { state, dispatch } = useContext(store)

  const progressStage = () => {
    setPhase(<Question />)
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
      <Navigation/>
      <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        {quizPhase}
      </Grid>
    </main>
  );
}

export default App
