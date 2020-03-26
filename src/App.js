import React, { useState, useContext, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import { getQuestions } from './utils/REST'
import { store } from './state'

import Navigation from './assets/components/navigation'
import Button from './assets/components/button'

import './assets/css/main.css'

function App() {
  let { state, dispatch } = useContext(store)

  useEffect(() => {
    const callQuiz = async() => {
      const metadata = await getQuestions()

      dispatch({
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
        <Grid item>
          <h1> Up for a challenge? </h1>
        </Grid>
        <Grid item>
          <Button> Start </Button>
        </Grid>
      </Grid>
    </main>
  );
}

export default App
