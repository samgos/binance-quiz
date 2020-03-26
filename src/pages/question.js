import React, { Fragment, useState, useEffect } from 'react'

import { Random } from 'react-animated-text'
import Grid from '@material-ui/core/Grid'
import Bounce from 'react-reveal/Bounce'

const delay = ms => new Promise(res => setTimeout(res, ms))

function Question(props) {
  const [ questionReveal, setReveal ] = useState(true)

  useEffect(() => {
    const animateRender = async() => {
      await delay(2000)
      await setReveal(false)
    }
    animateRender()
  }, [])

  return(
    <Fragment>
      <Grid item>
        <Bounce opposite when={questionReveal}>
          <div className="question-notation">
            <Random
            text="Question 1"
            iterations={1}
            effect="verticalFadeIn"
            effectChange={2}
            effectDirection="up"
            />
          </div>
        </Bounce>
      </Grid>
    </Fragment>
  )
}

export default Question
