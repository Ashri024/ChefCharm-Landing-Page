import Lottie from 'react-lottie';
import bgGif from "../assets/bgGif.json"
import { PiArrowFatLineDownFill } from "react-icons/pi";
import gsap from 'gsap'
import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AnimationContext } from '../contexts';

BackgroundGif.propTypes = {
  height: PropTypes.string,
}

function BackgroundGif({height}) {
    const {bgGifTopValues,screenCategory} = useContext(AnimationContext);
    const calculateTop = useCallback(() => {
      return bgGifTopValues[screenCategory]
    }, [bgGifTopValues,screenCategory])
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bgGif,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };
    useEffect(() => {
        gsap.to('.scrollArrow', {
            bottom: '-10px',
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut'
        })
    }, [])

  return (
    <div className='z-0 fixed top-0 left-0 right-0 bottom-0 max-w-[1600px] mx-auto overflow-hidden max-[700px]:hidden' id="bgGif" style={{
        height: height,
        transform: "scale(0.95)",
        opacity: 0
    }}>
        <div className='absolute left-0 pointer-events-none w-full z-0' style={{
          top: calculateTop()
        }} id="bgGifLottie">
            <div className='w-full h-full object-cover object-center'>
            <Lottie options={defaultOptions}
            height={"100%"}
            width={"100%"}
            isStopped={false}
            isPaused={false}
            />
            </div>
        </div>
        <div className=' absolute right-10 flex gap-2 items-center text-slate-600 text-xl font-semibold hover:text-black z-10 opacity-0 translate-x-full max-[700px]:hidden' id="scrollMore" style={{
          top:'88vh'
        }}>
          <PiArrowFatLineDownFill className='scrollArrow' style={{
            fontSize: '1.8rem',
            position: 'relative',
          }} />
          <span>Scroll to explore</span>
        </div>
    </div>
  )
}

export default BackgroundGif