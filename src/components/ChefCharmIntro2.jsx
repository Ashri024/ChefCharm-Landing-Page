import { useEffect } from "react";
import { useContext } from 'react';
import { AnimationContext } from '../contexts';
import gsap from 'gsap';
import welcomeSvg from '../assets/Welcome to.svg'
import ChefSvg from '../assets/Chefsvg.svg'
import CharmSvg from '../assets/Charmsvg.svg'
import masterChefSvg from '../assets/masterChef 1.svg'
import { Back, ScrollTrigger,ScrollToPlugin } from "gsap/all";
import { PiArrowFatLineDownFill } from "react-icons/pi";

gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);

function getStartedAnimation(){
  let tl = gsap.timeline({defaults: { ease: "power4.inOut" }});
      tl.to("#getStarted", { duration: 2, opacity: 1, translateY: 0 },"<")
      .to('#getStarted', {
        duration: 1.5, 
        translateY: -20,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }, ">")
      return tl;
}
function ChefCharmIntro2() {
  const {screenCategory,translateYValues,setTl2Global,tl2Global} = useContext(AnimationContext);   

  useEffect(()=>{
    const tl2 = gsap.timeline({
      ease: "power4.inOut",
    });
    setTl2Global(tl2);
  },[setTl2Global])

    useEffect(() => {
      if(!tl2Global) return;
      getStartedAnimation();
      function removeGetStarted() {
        gsap.killTweensOf('#getStarted')
        gsap.to('#getStarted', { duration: 1, opacity: 0, translateY: '-100%', ease: "power4.inOut",})
      }
      // gsap.killTweensOf('.bg')
      gsap.to(".ellipse1", { duration: 2, rotate: 90, ease: "power4.inOut",})

      tl2Global.to('#welcome', {duration: 1, opacity: 1, translateY: 0},"-=0.2")
      .to('#chefSvg', {duration: 1, opacity: 1, left: 0}, "<")
      .addLabel('welcome')
      .to('#charmSvg', {duration: 1, opacity: 1, left: 0}, "<")
      .to('#masterChef', {duration: 1, opacity: 1, translateY: 0})
      .to('#bgGif', {duration: 1, opacity: 1}, "-=0.5")
      .to('#contextBox', {duration: 1, opacity: 1, translateX: 0, ease: Back.easeInOut.config(1.7)}, "-=1")
      .to("#scrollMore", {duration: 1, opacity: 1, translateX: 0, ease: Back.easeInOut.config(1.7)}, "-=1").addLabel('end')
      
      // setTl2Global(tl2);

      ScrollTrigger.create({
        animation: tl2Global,
        trigger: "#introChefCharm",
        start: "top 90%",
        id: "introChefCharm",
        end: "bottom bottom",
        markers: true,
        scrub: 1,
        
        onEnter: () => {
          console.log('onEnter intro')
            removeGetStarted()
        },
        onLeaveBack: () => {
          console.log('onLeaveBack intro')
          getStartedAnimation();
        },
       onLeave: () => {
          console.log('onLeave intro')
          // tl2Global.pause()
        },
        onEnterBack: () => {
          console.log('onEnterBack intro')
          tl2Global.pause()
        },
      });
      
    }, [screenCategory, tl2Global, translateYValues]); 
  return (
    <div className="relative z-10 text-white h-screen p-4 overflow-hidden max-w-[1600px] mx-auto opacity-100" id="chefCharmIntro">
      <div className="fixed top-44 w-full text-center text-white font-bold -translate-y-full opacity-0 flex gap-6 max-[700px]:gap-0 items-center left-1/2 -translate-x-1/2 justify-center p-4" style={{
        zIndex: 100
      }} id={"getStarted"}>
        <PiArrowFatLineDownFill className='scrollArrow' style={{
            color: 'white',
            position: 'relative',
          }} />
        Scroll To Get Started
      </div>
      <img src={welcomeSvg} alt="Welcome to" className='w-48 max-[700px]:w-40 top-20 left-1/2 -translate-x-1/2 max-[700px]:top-40 fixed opacity-0' id='welcome'/>
        <div className="flex justify-center items-center fixed w-full top-48 gap-12 max-[700px]:gap-0 left-0" id="chefCharmFlex">
            <img id="chefSvg" src={ChefSvg} alt="Chef" className='w-48 max-[700px]:w-40 relative left-[-100px] opacity-0'/>
            <img id="charmSvg" src={CharmSvg} alt="Charm" className='w-48 max-[700px]:w-40 relative left-[100px] opacity-0'/>
        </div>
        <img src={masterChefSvg} alt="Master Chef" id='masterChef'/>
    </div>
  )
}

export default ChefCharmIntro2