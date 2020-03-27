import React, { Component } from 'react'
import Lottie from 'react-lottie';

import * as animation from "../animations/loader.json"

const defaultOptions = {
    animationData: animation.default,
    loop: true
}

function Loader(){
  return(
    <Lottie
      options={defaultOptions}
      height={300}
      width={300}
      speed={10}
     />
  )
}

export default Loader;
