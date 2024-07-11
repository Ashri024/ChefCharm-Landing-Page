import Lottie from 'react-lottie';
import bgGif from "../assets/bgGif.json"
import { PiArrowFatLineDownFill } from "react-icons/pi";
import gsap from 'gsap'
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AnimationContext } from '../contexts';

BackgroundGif.propTypes = {
  height: PropTypes.string,
  idName: PropTypes.string,
  idLottie: PropTypes.string
}

function BackgroundGif({height, idName="bgGif", idLottie="bgGifLottie"}) {
    const {screenCategory,bgGifY} = useContext(AnimationContext);
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
    <div className={`${idName!=="bgGif"?"z-40 absolute":"z-0 fixed"} -top-[23rem]  left-0 right-0 bottom-0 max-w-[1600px] mx-auto overflow-hidden`} id={idName} style={{
        height: height,
        transform: "scale(0.95)",
        opacity: 0
    }}>
        <div className='absolute left-0 pointer-events-none w-full z-0' style={{
          top: bgGifY(screenCategory).bgGifTop
        }} id={idLottie}>
            <div className='w-full h-full object-cover object-center'>
            <Lottie options={defaultOptions}
            height={"100%"}
            width={"100%"}
            isStopped={false}
            isPaused={false}
            />
            </div>
        </div>
        <div className=' absolute right-10 gap-2 items-center text-slate-600 text-xl font-semibold hover:text-black z-10 opacity-0 translate-x-full max-[768px]:hidden' id="scrollMore" style={{
          top:'88vh',
          display: idName !== 'bgGif' || screenCategory==="mq500" || screenCategory==="mq768" ? 'none' : 'flex'
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