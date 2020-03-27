import React, { Fragment, useState, useEffect, useContext } from 'react'

import RadioGroup from '@material-ui/core/RadioGroup'
import { Random } from 'react-animated-text'
import Grid from '@material-ui/core/Grid'
import Bounce from 'react-reveal/Bounce'

import Select from '../assets/components/select'
import Choice from '../assets/components/choice'
import Button from '../assets/components/button'

import { store } from '../state'

const delay = ms => new Promise(res => setTimeout(res, ms))

function Question(props) {
  const [ activeComponent, setComponent ] = useState(<Title />)

  let { state, dispatch } = useContext(store)
  let { glossaries } = state
  let { index } = props

  let metadata = Object.entries(glossaries)[index][1]

  function Title(){
    const [ questionReveal, setReveal ] = useState(true)

    useEffect(() => {
      const animateRender = async() => {
        await delay(2000)
        await setReveal(false)
        await delay(2000)
        setComponent(<Query />)
      }
      animateRender()
    }, [])


    return(
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
    )
  }

  function Query() {
    const { options, excerpt } = metadata

    return(
      <Fragment>
        <Grid item>
          <h1 className="question-title"> {excerpt} </h1>
        </Grid>
        <Grid item>
          <RadioGroup aria-label="options" value={true} style={{ paddingBottom: '2em' }}>
            <Choice value={options[0]} control={<Select checked={true} />} label={options[0]} />
            <Choice value={options[1]} control={<Select />} label={options[1]} />
            <Choice value={options[2]} control={<Select />} label={options[2]} />
            <Choice value={options[3]} control={<Select />} label={options[3]} />
            <Choice value={options[4]} control={<Select />} label={options[4]} />
           </RadioGroup>
        </Grid>
        <Grid item>
          <Button> Answer </Button>
        </Grid>
      </Fragment>
    )
  }

  return(
    <Fragment>
      {activeComponent}
    </Fragment>
  )
}

export default Question
