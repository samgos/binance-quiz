import React, { Component } from 'react'
import Lottie from 'react-lottie';

import * as animation from "../animations/correct.json"

const defaultOptions = {
    animationData: animation.default,
    loop: false
}

function Correct(){
  return(
    <Lottie
      options={defaultOptions}
      isStopped={false}
      isPaused={false}
      loop={false}
      height={100}
      width={100}
      speed={10}
     />
  )
}

export default Correct;
