import React, { Fragment, useState, useEffect, useContext } from 'react'

import Grid from '@material-ui/core/Grid'

import { store } from '../state'

function Score(props) {
  const [ feedback, setFeedback ] = useState(null)

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
    getFeedback()
  }, [ ])

  return(
    <Fragment>
      <Grid item>
        <h1> {feedback} </h1>
      </Grid>
      <Grid item>
        <h2> Your score: </h2>
        <p className="score">
          <span className="val">{state.score}</span>/10
        </p>
      </Grid>
    </Fragment>
  )
}

export default Score
