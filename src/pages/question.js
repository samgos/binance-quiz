import React, { Fragment, useState, useEffect } from 'react'

import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Random } from 'react-animated-text'
import Grid from '@material-ui/core/Grid'
import Bounce from 'react-reveal/Bounce'

import Select from '../assets/components/select'
import Choice from '../assets/components/choice'

import label from '../assets/css/label'

const delay = ms => new Promise(res => setTimeout(res, ms))

function Question(props) {
  const [ activeComponent, setComponent ] = useState(<Title />)

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
    const { options, excerpt } = props.metadata

    return(
      <Fragment>
        <Grid item>
          <h1> {excerpt} </h1>
        </Grid>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={label}>Answer</FormLabel>
            <RadioGroup aria-label="options" value={true}>
              <Choice value={options[1]} control={<Select checked={true} />} label={options[1]} />
              <Choice value={options[1]} control={<Select />} label={options[1]} />
              <Choice value={options[2]} control={<Select />} label={options[2]} />
             </RadioGroup>
          </FormControl>
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
