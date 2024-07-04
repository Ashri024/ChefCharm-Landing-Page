import gsap, { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

function Experiment() {
    useEffect(()=>{
        let tl = gsap.timeline()
        tl.to("#box",{
            duration:2,
            rotate:360,
            x:500,
        })
        .to("#box2", {
            duration: 2,
            rotate: 360,
            x: 500,
        })

        let tl2 = gsap.timeline()
        tl2.to("#box",{
            duration:2,
            rotate:360,
            y:500,
        })
        .to("#box2", {
            duration: 2,
            rotate: 360,
            y: 500,
        })
        ScrollTrigger.create({
            trigger:"#area2",
            id:"area2",
            start:"top bottom",
            end:"bottom bottom",
            markers:true,
            scrub:1,
            animation: tl
        })
        ScrollTrigger.create({
            trigger:"#area3",
            id:"area3",
            start:"top bottom",
            end:"bottom bottom",
            markers:true,
            scrub:1,
            animation: tl2
        })
    },[])
  return (
    <div className='relative'>
        <div className='fixed top-[20%] left-4 w-[200px] aspect-square bg-teal-300 rounded' id="box"/>
        <div className='fixed top-[50%] left-4 w-[200px] aspect-square bg-pink-300 rounded' id="box2"/>
        <div className='h-screen bg-orange-300 opacity-40' id="area1"></div>
        <div className='h-screen bg-blue-300 opacity-40' id="area2"></div>
        <div className='h-screen bg-green-300 opacity-40' id="area3"></div>
    </div>
  )
}

export default Experiment