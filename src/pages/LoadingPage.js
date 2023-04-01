import React, { useEffect, useState } from 'react'

import Lottie from 'react-lottie';
import * as heart from "../80501-heart.json"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heart.default,
    rendererSettings: {
        preserveAspectRation: 'xMidYmid slice'
    }
};

function LoadingPage() {
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);

            setTimeout(() => {
                setCompleted(true);
            }, 1000);
        }, 2000);
    })


  return (
    <>
        {!completed? (
            <Lottie options={defaultOptions} height={200} width={200}/>
        ):(<></>)}
    </>
  )
}

export default LoadingPage