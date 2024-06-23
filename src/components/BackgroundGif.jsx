import Lottie from 'react-lottie';
import bgGif from "../assets/bgGif.json"
// import gsap from 'gsap'
// import { useEffect } from 'react'
function BackgroundGif() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bgGif,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };
    // useEffect(() => {
    //     gsap.to('#bgGif', {duration: 2, opacity: 1})
    // }, [])

  return (
    <div className='h-screen max-h-[740px] max-[700px]:max-h-[540px]  z-0 absolute top-0 left-0 right-0 bottom-0'>
        <div className='absolute bottom-0 left-0 pointer-events-none w-full' id="bgGif" >
            <div className='w-full h-full object-cover object-center'>
            <Lottie options={defaultOptions}
            height={"100%"}
            width={"100%"}
            isStopped={false}
            isPaused={false}
            />
            </div>
        </div>
    </div>
  )
}

export default BackgroundGif