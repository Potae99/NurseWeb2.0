import React, { useEffect, useState } from 'react'

import Lottie from 'react-lottie';
import * as hospital from "../115223-hospital.json"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hospital.default,
    rendererSettings: {
        preserveAspectRation: 'xMidYmid slice'
    }
};
function LoadingPage() {
    
  return (
    <>
        <Lottie options={defaultOptions} height={400} width={400}/>
    </>
  )
}

export default LoadingPage