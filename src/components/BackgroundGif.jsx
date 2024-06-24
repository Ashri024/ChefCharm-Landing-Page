import Lottie from 'react-lottie';
import bgGif from "../assets/bgGif.json"
import { PiArrowFatLineDownFill } from "react-icons/pi";
import gsap from 'gsap'
import { useEffect } from 'react';
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
    useEffect(() => {
        gsap.to('#scrollArrow', {
            bottom: '-10px',
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut'
        })
    }, [])

  return (
    // <div className='h-screen max-h-[740px] 
    // max-[700px]:max-h-[650px] z-0 absolute top-0 left-0 right-0 bottom-0 max-w-[1600px] mx-auto'>
    <div className='h-screen max-h-[740px] z-0 absolute top-0 left-0 right-0 bottom-0 max-w-[1600px] mx-auto overflow-hidden'>
        <div className='absolute bottom-0 left-0 pointer-events-none w-full z-0' id="bgGif" >
            <div className='w-full h-full object-cover object-center'>
            <Lottie options={defaultOptions}
            height={"100%"}
            width={"100%"}
            isStopped={false}
            isPaused={false}
            />
            </div>
        </div>
        <div className=' absolute bottom-8 right-10 flex gap-2 items-center text-slate-600 text-xl font-semibold hover:text-black z-10 opacity-100 max-[700px]:hidden' id="scrollMore">
          <PiArrowFatLineDownFill id='scrollArrow' style={{
            fontSize: '1.8rem',
            position: 'relative',
          }} />
          <span>Scroll to explore</span>
        </div>
    </div>
  )
}

export default BackgroundGif