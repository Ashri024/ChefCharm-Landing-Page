import gsap from 'gsap'
import {  useEffect, useRef,useContext } from 'react';
import { AnimationContext } from '../contexts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaptopMockup from "../assets/Laptop.png";
import HomePage from '../assets/HomePageChefCharm.png';
import { Back } from 'gsap/all';
import Typewriter from 'typewriter-effect/dist/core';

gsap.registerPlugin(ScrollTrigger);
function bgGifY(screenCategory) {
  if(screenCategory === 'mq500') {
    
    let bgGifTop = "60vh";
    let bgGifTopIntro = "40vh";
    return {bgGifTop,bgGifTopIntro}
  }else if(screenCategory === 'mq700') {
    let bgGifTop = "55vh";
    let bgGifTopIntro = "40vh";
    return {bgGifTop,bgGifTopIntro}
  }
  else if(screenCategory === 'mq1024') {
    let bgGifTop = "50vh";
    let bgGifTopIntro = "50vh";
    return {bgGifTop,bgGifTopIntro}
  }
  else if(screenCategory === 'mq1280') {
    let bgGifTop = "40vh";
    let bgGifTopIntro = "60vh";
    return {bgGifTop,bgGifTopIntro}
  }
  else {
    let bgGifTop = "30vh";
    let bgGifTopIntro = "70vh";
    return {bgGifTop,bgGifTopIntro}
  }
}
function typeWriting(text, typeRef, typewriter){
  return new Promise((resolve, reject) => {
    if (!typewriter) {
      reject('Typewriter not initialized');
      return;
    }
    typewriter.callFunction(() => {
      const cursorElement = typeRef.current.querySelector('.Typewriter__cursor');
      if (cursorElement) {
        cursorElement.style.display = 'inline-block';
      }
    }).deleteAll(5)
      .typeString(text)
      .callFunction(() => {
        const cursorElement = typeRef.current.querySelector('.Typewriter__cursor');
        if (cursorElement) {
          cursorElement.style.display = 'none';
        }
      })
      .callFunction(() => {
        resolve(); // Resolve the promise after all operations are done
      })
      .start();
  });
}
  function onChangeEnterAnimation(text,typewriter,typeRef){
    return typeWriting(text,typeRef,typewriter)
  }
function onPageEnterAnimation(typeRef, screenCategory){
  let tl4= gsap.timeline()
  
          tl4.to('.bgGradientEllipse', { duration: 2, rotate: 180, ease: "power4.inOut", translateX: "40%",translateY: "-20%" })
          .to("#bgGifLottie", { duration: 2, rotate:90,top:bgGifY(screenCategory).bgGifTopIntro,translateX:"-37%",translateY: 0 },"<")
          .to("#bgGif",{
            duration: 2,
            top:"-6rem",
            opacity:1,
            ease: "power1.in"
          }, "<")
          .to(typeRef.current, { duration: 1, opacity: 1, translateX: 0, ease:Back.easeInOut.config(1.7) },"<" )
          .to(("#aboutList li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
  return {tl4}
}

function AboutChefCharm2() {
  const {screenCategory,translateYValues,tl2Global} = useContext(AnimationContext);
  const typeRef = useRef(null);
  
  useEffect(() => {
    if(!tl2Global) return;
    let typewriter= new Typewriter(typeRef.current, {
      loop: false,
      delay:10
    });
    let tl3 ="";
    let tl4="";
    let tl5=""
    let tl6=""

      
      
     gsap.to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: translateYValues[screenCategory] })
     ScrollTrigger.create({
      //  animation: tl3,
       id: "aboutChefCharm",
       trigger: "#aboutChefCharm",
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
       toggleActions: "play pause resume restart",
       onEnter: async() => {
        tl3= gsap.timeline({defaults:{ease: "power4.inOut"}})
        tl3.to("#laptopMockup", { duration: 2, opacity: 1, translateX: 0, ease:Back.easeInOut.config(1.7) },"<")

        let obj= onPageEnterAnimation(typeRef,screenCategory)
         tl4=obj.tl4
         gsap.to("#aboutList", { duration: 1, opacity: 1, }, "<")
         console.log('onEnter aboutChefCharm')
         await onChangeEnterAnimation("<span id='whatIs'>What actually is <br><span>ChefCharm</span> ?</span>",typewriter,typeRef)
         await tl2Global.timeScale(3).reverse()
         tl3.pause()
       },
       onLeaveBack: async() => {
        console.log('onLeaveBack aboutChefCharm')
        tl3.timeScale(2).reverse()
        typewriter.deleteAll(1);
        console.log("progress tl4: ",tl4.progress())

        gsap.killTweensOf(tl4)
        if(tl6)
          gsap.killTweensOf(tl6)

        let tl4reverse = gsap.timeline()
        tl4reverse.to("#aboutList li", { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to(typeRef.current, { duration: 1, opacity: 0, translateX: "100%", ease:Back.easeInOut.config(1.7) },"<" )
        .to('.bgGradientEllipse', { duration: 2, rotate: 90, ease: "power4.inOut", translateY: translateYValues[screenCategory],translateX:0 }, "<")
        .to("#bgGifLottie", { duration: 2, rotate:0,top:bgGifY(screenCategory).bgGifTop,translateX:0,translateY: 0 },"<")
        .to("#bgGif",{
          duration: 2,
          top:0,
          opacity:0,
          ease: "power1.in",
        }, "<")
        .to("#aboutList", { duration: 1, opacity: 0, }, "<")
        
        tl2Global.play()
      },
       onEnterBack: async() => {
        tl3.pause()
       },
     });

     ScrollTrigger.create({
      id: "aboutChefCharm2",
       trigger: "#aboutChefCharm2",
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
       toggleActions: "play pause resume restart",

       onEnter:async()=> {
        console.log('onEnter aboutChefCharm2')
       await onChangeEnterAnimation("<span id='whatIs'>What actually are its <br><span>Features</span> ?</span>",typewriter,typeRef)
        tl5= gsap.timeline()
       tl5.to(("#aboutList li"), { duration: 1, opacity: 0, translateX: "-100%", stagger:0.5 }, "<")
       .to(("#aboutList2 li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
      },
       onLeaveBack:async()=> {
        console.log('onLeaveBack aboutChefCharm2')
        await onChangeEnterAnimation("<span id='whatIs'>What actually is <br><span>ChefCharm</span> ?</span>",typewriter,typeRef)
        tl6 = gsap.timeline()
        // gsap.killTweensOf(tl5)
        tl6.to(("#aboutList2 li"), { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to(("#aboutList li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
       },
     })
     let tl7="";
      let tl8="";
     ScrollTrigger.create({
      id: "featuresPart1",
       trigger: "#featuresPart1",
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
       toggleActions: "play pause resume restart",

       onEnter:async()=> {
        console.log('onEnter featuresPart1')
       await onChangeEnterAnimation("<span id='featureHeading'>Comprehensive Recipe Search:</span>",typewriter,typeRef)
       gsap.killTweensOf(tl3)
       console.log("screencategory",screenCategory)
       if(screenCategory === 'mq700' || screenCategory === 'mq500'){
        gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background: "linear-gradient(266deg, rgb(0, 0, 0) 0%, rgb(29, 7, 79) 64%, rgb(63, 0, 206) 100%)"
        }).restart()
        tl7= gsap.timeline()
       }else{
       gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background: "linear-gradient(90deg, #FFDCE5 0%, #A0B9FF 100%)"
        }).restart()
      }
        tl7= gsap.timeline()
       tl7.to(".bgGradientEllipse", { duration: 1, rotate: 270, ease: "power4.inOut",
        background:"linear-gradient(18deg, #000000 47%, #1D074F 64%, #3F00CE 100%)"}, "<")
       .to(("#mockup1"), { duration: 1, opacity: 0, translateY: "-100%", scale:0.2 }, "<")
       .to(("#mockup2"), { duration: 1, opacity: 1, translateX: "0", scale:0.7 }, "<")
       .to(("#aboutList2 li"), { duration: 1, opacity: 0, translateX: "-100%", stagger:0.5 }, "<")
       .to(("#aboutList3 li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
       
      },
       onLeaveBack:async()=> {
        console.log('onLeaveBack featuresPart1')
        await onChangeEnterAnimation("<span id='whatIs'>What actually are its <br><span>Features</span> ?</span>",typewriter,typeRef)
        if(screenCategory === 'mq700' || screenCategory === 'mq500'){
          gsap.to(".bgGradient",{
            duration: 2,
            ease: "power4.out",
            background: "linear-gradient(263deg, rgb(0, 0, 0) 0%, rgb(79, 29, 7) 50%, rgb(79, 29, 7) 100%)"
          }).restart()
        }else{
        gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background: "linear-gradient(90deg, #B9B9B9 0%, #FFD9D9 100%)"
        }).restart()}
        tl8 = gsap.timeline()
        tl8.to((".bgGradientEllipse"), { duration: 1, rotate: 180, ease: "power4.inOut",
          background:"linear-gradient(270deg, #000000 0%, #4F1D07 40%, #4F1D07 100%)"
        }, "<")
        .to(("#mockup2"), { duration: 1, opacity: 0, translateX: "-100%", scale:1 }, "<")
        .to(("#mockup1"), { duration: 1, opacity: 1, translateY: "0", scale:1 }, "<")
        .to(("#aboutList3 li"), { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to(("#aboutList2 li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
        
       },
     })

      
  },[screenCategory, tl2Global, translateYValues])

  return (
    <div className="h-screen opacity-100 transparent w-full relative z-50" id="aboutChefCharm">
      <div className="h-screen transparent w-full fixed z-50 overflow-hidden flex items-center justify-around top-0 left-0 max-[700px]:flex-col pt-12" >
      <div id="laptopMockup" style={{ translate: "-100% 0",opacity:0 }} className="relative left-6 sm:-left-2 h-[550px] max-[1024px]:h-[450px] min-[700px]:-top-12">
        <img id="mockup1" src={LaptopMockup} alt="Chef Charm" className="w-full z-20 h-full object-cover object-center absolute top-0 left-0" />
        <img id="mockup2" src={HomePage} alt="Chef Charm" className="w-full z-20 h-full object-cover object-center absolute top-0 left-0 opacity-0 -translate-x-full" />
      </div>
      <div className='w-full min-[700px]:w-2/3 max-w-[540px]' style={{ height: "90%",position:"relative",padding:"1rem"}}>
        <div ref={typeRef} className="opacity-0 translate-x-full relative top-12 left-0 min-w-[450px] max-[1024px]:min-w-[350px] max-[700px]:top-0" id="typewriter"/>
        <div className='relative mt-2 min-[700px]:mt-8'>
          <ul id="aboutList" className="absolute top-0 left-0 max-w-[90%] max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'>It is an innovative recipe web application designed to elevate your cooking experience. </li>
            <li className='opacity-0 translate-x-full mb-4'>It offers a seamless and interactive way to discover, create, and manage recipes, leveraging advanced technologies.</li>
            <li className='opacity-0 translate-x-full mb-4'>It uses AI to bring culinary inspiration to your fingertips.</li>
          </ul>
          <ul id="aboutList2" className="absolute top-0 left-0 max-w-[90%] max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'>Whether you&apos;re a professional chef or an enthusiastic home cook, ChefCharm offers a comprehensive suite of features to streamline your recipe discovery, creation, and organization. </li>
            <li className='opacity-0 translate-x-full mb-4'>Let&apos;s delve into the key features that make ChefCharm a must-have tool for every cooking enthusiast</li>
          </ul>
          <ul id="aboutList3" className="absolute top-0 left-0 max-w-[90%] max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'>ChefCharm leverages the power of the Edamam API to offer a vast collection of recipes from various cuisines. </li>
            <li className='opacity-0 translate-x-full mb-4'>Users can easily search for recipes using keywords, and the app provides auto-suggestions after typing three or more characters. </li>
            <li className='opacity-0 translate-x-full mb-4'>Additionally, users can refine their searches by applying filters based on meal types, cuisine types and dish types. </li>
          </ul>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default AboutChefCharm2