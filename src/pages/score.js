import React, { Fragment, useState, useEffect, useContext } from 'react'

import Grid from '@material-ui/core/Grid'
import Bounce from 'react-reveal/Bounce'

import { store } from '../state'

const delay = ms => new Promise(res => setTimeout(res, ms))

function Score(props) {
  const [ feedback, setFeedback ] = useState(null)
  const [ revealState, setReveal ] = useState(false)

  let { state } = useContext(store)
  let { score } = state

  const getFeedback = () => {
    let targetComponent = document.getElementsByClassName('val')[0]
    let comment = null
    let color = null

    if(score < 4) {
      comment = 'Better luck next time.'
      color = 'red'
    } else if(score == 4){
      comment = 'You know your stuff, just about.'
      color = 'orange'
    } else if(score <= 6) {
      comment = 'You have got some potential!'
      color = 'orange'
    } else if(score <= 8) {
      comment = 'Impressive.'
      color = '#f0ba2d'
    } else if(score <= 9){
      comment = 'Wow, just wow.'
      color = '#f0ba2d'
    } else if(score == 10){
      comment = 'You must be an expert, right?'
      color = '#2de28e'
    }

    targetComponent.style.color = color
    setFeedback(comment)
  }

  useEffect(() => {
    const animateRender = async() => {
      await delay(1000)
      await setReveal(true)
    }
    getFeedback()
    animateRender()
  }, [ ])

  return(
    <Fragment>
      <Grid item>
        <Bounce top>
          <h1> {feedback} </h1>
        </Bounce>
      </Grid>
      <Grid item>
        <Bounce bottom when={revealState}>
          <h2> Your score: </h2>
          <p className="score">
            <span className="val">{state.score}</span>/10
          </p>
        </Bounce>
      </Grid>
    </Fragment>
  )
}

export default Score
