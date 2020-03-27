import React, { Fragment, useState, useEffect } from 'react'

import Button from '../assets/components/button'
import Grid from '@material-ui/core/Grid'
import Bounce from 'react-reveal/Bounce'

import logo from "../assets/images/logo.svg"

const delay = ms => new Promise(res => setTimeout(res, ms))

function Start(props){
  const [ revealState, setReveal ] = useState(false)

  useEffect(() => {
    const animateRender = async() => {
      await delay(1000)
      await setReveal(true)
    }
    animateRender()
  }, [])

  return(
    <Fragment>
      <Grid item>
        <Bounce bottom>
          <img className="nav-logo" src={logo} />
          <h1> Up for a challenge? </h1>
        </Bounce>
      </Grid>
      <Grid item>
        <Bounce bottom when={revealState}>
          <Button onClick={props.next}> Start </Button>
        </Bounce>
      </Grid>
    </Fragment>
  )
}

export default Start;
