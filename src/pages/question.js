import React, { Fragment, useState, useEffect, useContext } from 'react'

import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import { Random } from 'react-animated-text'
import Grid from '@material-ui/core/Grid'
import Bounce from 'react-reveal/Bounce'

import Select from '../assets/components/select'
import Choice from '../assets/components/choice'
import Button from '../assets/components/button'
import Correct from '../assets/components/correct'
import Incorrect from '../assets/components/incorrect'

import { store } from '../state'

const delay = ms => new Promise(res => setTimeout(res, ms))

function Question(props) {
  const [ activeComponent, setComponent ] = useState(<Title />)

  let { state, dispatch } = useContext(store)
  let { glossaries } = state
  let { index } = props

  let metadata = Object.entries(glossaries)[index][1]

  const answerQuestion = async(selection) => {
    if(metadata.options[selection] == metadata.answer){
      await setComponent(<Correct />)
      await delay(3000)
    } else {
      await setComponent(<Incorrect />)
      await delay(3000)
    } props.next()
  }

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
            text={`Question ${index + 1}`}
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
    const [ value, setValue ] = useState(0)

    let { options, excerpt } = metadata

    const handleChange = event => {
      setValue(event.target.value)
    }

    return(
      <Fragment>
        <Grid item>
          <h1 className="question-title"> {excerpt} </h1>
        </Grid>
        <Grid item>
          <FormControl component="fieldset">
            <RadioGroup aria-label="options" onChange={handleChange} style={{ paddingBottom: '2em' }}>
              <Choice value={0} control={<Select checked={value == 0}/>} label={options[0]} />
              <Choice value={1} control={<Select checked={value == 1}/>} label={options[1]} />
              <Choice value={2} control={<Select checked={value == 2}/>} label={options[2]} />
              <Choice value={3} control={<Select checked={value == 3}/>} label={options[3]} />
              <Choice value={4} control={<Select checked={value == 4}/>} label={options[4]} />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <Button onClick={() => answerQuestion(value)}> Answer </Button>
        </Grid>
      </Fragment>
    )
  }

  useEffect(() => {
    let { index }  = props
    let metadata = Object.entries(glossaries)[index][1]

    console.log(metadata)

    setComponent(<Title />)
  }, [ props.index ])

  return(
    <Fragment>
      {activeComponent}
    </Fragment>
  )
}

export default Question
