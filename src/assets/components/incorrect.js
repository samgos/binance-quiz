import React, { Component } from 'react'
import Lottie from 'react-lottie';

import * as animation from "../animations/incorrect.json"

const defaultOptions = {
    animationData: animation.default,
    loop: false
}

function Incorrect(){
  return(
    <Lottie
      options={defaultOptions}
      isStopped={false}
      isPaused={false}
      loop={false}
      height={100}
      width={100}
     />
  )
}

export default Incorrect;
