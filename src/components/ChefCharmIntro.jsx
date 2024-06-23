import { useEffect } from 'react'
import welcomeSvg from '../assets/Welcome to.svg'
import ChefSvg from '../assets/Chefsvg.svg'
import CharmSvg from '../assets/Charmsvg.svg'
import masterChefSvg from '../assets/masterChef 1.svg'
import gsap from 'gsap'

function ChefCharmIntro() {
useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power4.inOut" } });

    // Add the first three animations to the timeline to start simultaneously
    tl.to('#welcome', { opacity: 1 })
      .to('#chefSvg', { opacity: 1, left: 0 }, "<") // "<" means start at the same time as the previous animation
      .to('#charmSvg', { opacity: 1, left: 0 }, "<"); // "<" means start at the same time as the previous animation

    // Stagger the last animation to start after the first three have completed
    tl.to('#masterChef', { opacity: 1, translateY: 0 }, "-=1")
    .to('#bgGif', {duration: 1, opacity: 1}, "-=0.5")
}, []);

  return (
    <div className="relative z-10 text-white h-screen p-4 overflow-hidden max-h-[740px] max-[700px]:max-h-[540px] max-w-[1600px] mx-auto">
        <img src={welcomeSvg} alt="Welcome to" className='w-48 max-[700px]:w-40 mx-auto top-16 relative opacity-0' id='welcome'/>
        <div className="flex justify-center items-center relative top-28 max-[700px]:top-16 gap-12 max-[700px]:gap-0" id="chefCharmFlex">
            <img id="chefSvg" src={ChefSvg} alt="Chef" className='w-48 max-[700px]:w-40 relative left-[-100px] opacity-0'/>
            <img id="charmSvg" src={CharmSvg} alt="Charm" className='w-48 max-[700px]:w-40 relative left-[100px] opacity-0'/>
        </div>
        <img src={masterChefSvg} alt="Master Chef" id='masterChef'/>
    </div>
  )
}

export default ChefCharmIntro