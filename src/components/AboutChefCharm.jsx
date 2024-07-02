import gsap from 'gsap'
import {  useEffect, useRef,useContext } from 'react';
import { AnimationContext } from '../contexts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaptopMockup from "../assets/Laptop.png";
import HomePage from '../assets/HomePageChefCharm.png';
import RecipeMethod from '../assets/MultiMode.png';
import RecipeManage from '../assets/RecipeManage.png';
import listAndMealPlanner from '../assets/listAndMealPlanner.png';
import colotThemes from '../assets/ColorThemes.png';
import teckStack2 from '../assets/techStackFinal.png';

import { Back } from 'gsap/all';
import Typewriter from 'typewriter-effect/dist/core';

gsap.registerPlugin(ScrollTrigger);

function AboutChefCharm2() {
  const {screenCategory,translateYValues,tl2Global,onPageEnterAnimation,onChangeEnterAnimation,bgGifY} = useContext(AnimationContext);
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
         if(screenCategory !== 'mq700' && screenCategory !== 'mq500'){
          gsap.to(".bgGradient",{
            duration: 2,
            ease: "power4.out",
            background: "linear-gradient(90deg, #B9B9B9 0%, #FFD9D9 60%)"})
          }
        tl8 = gsap.timeline()
        tl8.to((".bgGradientEllipse"), { duration: 1, rotate: 180, ease: "power4.inOut",
          background:"linear-gradient(270deg, #000000 0%, #4F1D07 40%, #4F1D07 100%)"
        }, "<")
         await tl2Global.timeScale(3).reverse()
        //  tl3.pause()
       },
       onLeaveBack: async() => {
        console.log('onLeaveBack aboutChefCharm')
        tl3.timeScale(2).reverse()
        typewriter.deleteAll(1);
        console.log("progress tl4: ",tl4.progress())
        if(screenCategory !== 'mq700' && screenCategory !== 'mq500'){
          gsap.to(".bgGradient",{
            duration: 2,
            ease: "power4.out",
            background: "linear-gradient(90deg, #B9B9B9 0%, #FFD9D9 100%)"
          }).restart()
        }
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
       
        tl7= gsap.timeline()
       tl7.to(".bgGradientEllipse", { duration: 1, rotate: 270, ease: "power4.inOut",
        background:"linear-gradient(18deg, #000000 47%, #1D074F 64%, #3F00CE 100%)"}, "<")
       .to(("#mockup1"), { duration: 1, opacity: 0, translateY: "-100%", scale:0.2 }, "<")
       .to(("#mockup2"), { duration: 1, opacity: 1, translateX: "0", scale:0.9 }, "<")
       .to(("#aboutList2 li"), { duration: 1, opacity: 0, translateX: "-100%", stagger:0.5 }, "<")
       .to(("#aboutList3 li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
       
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
          background: "linear-gradient(90deg, rgb(255, 220, 229) 0%, rgb(160, 185, 255) 60%)"
        }).restart()
      }
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
        .to(("#mockup1"), { duration: 1, opacity: 1,translateY:"-50%" ,scale:1 }, "<")
        .to(("#aboutList3 li"), { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to(("#aboutList2 li"), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
        
       },
     })

      createScrollTrigger("#featuresPart2","<span id='featureHeading'> Multi-Method Recipe Creation:</span>","<span id='featureHeading'>Comprehensive Recipe Search:</span>","#mockup3","#mockup2","#aboutList4","#aboutList3")
      createScrollTrigger("#featuresPart3","<span id='featureHeading'>Recipe Management:</span>","<span id='featureHeading'> Multi-Method Recipe Creation:</span>","#mockup4","#mockup3","#aboutList5","#aboutList4")
      createScrollTrigger("#featuresPart4","<span id='featureHeading'>Shopping and Meal Planning:</span>","<span id='featureHeading'>Recipe Management:</span>","#mockup5","#mockup4","#aboutList6","#aboutList5")
      createScrollTrigger("#featuresPart5","<span id='featureHeading'>User-Friendly Experience:</span>","<span id='featureHeading'>Shopping and Meal Planning:</span>","#mockup6","#mockup5","#aboutList7","#aboutList6")
      
      
  function createScrollTrigger(trigger, text1,text2,mockup1,mockup2,aboutList1,aboutList2,){
    let timeline1="";
    let timeline2="";
    let timeline3=""
    let timeline4=""
     ScrollTrigger.create({
      id: trigger,
       trigger: `${trigger}`,
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
      //  markers:true,
       toggleActions: "play pause resume restart",

       onEnter:async()=> {
        console.log('onEnter ', trigger)
       await onChangeEnterAnimation(text1,typewriter,typeRef)
       gsap.killTweensOf(tl3)
       

       timeline1= gsap.timeline()
       
       timeline1.to((`${aboutList2} li`), { duration: 1, opacity: 0, translateX: "-100%", stagger:0.5 }, "<")
       .to((`${aboutList1} li`), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
       timeline3 = gsap.timeline()
       timeline3.to((mockup2), { duration: 1, opacity: 0, translateY: "-100%", scale:0.2 }, "<")
       .to((mockup1), { duration: 1, opacity: 1, translateX: "0", scale:0.9}, "<")
       
      },
       onLeaveBack:async()=> {
        console.log('onLeaveBack ', trigger)
        await onChangeEnterAnimation(text2,typewriter,typeRef)
        

        timeline2 = gsap.timeline()
        timeline2.to((`${aboutList1} li`), { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to((`${aboutList2} li`), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
        timeline4 = gsap.timeline()

        timeline4.to((mockup1), { duration: 1, opacity: 0, translateX: "-100%", scale:1 }, "<")
        .to((mockup2), { duration: 1, opacity: 1,translateY:"0" ,scale:0.9 }, "<")
        
       },
     })
    }

    ScrollTrigger.create({
      id: "techStacks",
       trigger: "#techStacks",
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
       markers:true,
       toggleActions: "play pause resume restart",

       onEnter:async()=> {
        console.log('onEnter ', "techStacks")
       await onChangeEnterAnimation("<span id='featureHeading'>What Tech Stack Has Been Used?:</span>",typewriter,typeRef)
       gsap.killTweensOf(tl3)
       if(screenCategory === 'mq700' || screenCategory === 'mq500'){
        gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background:"linear-gradient(18deg,#BA061A 0%, #151515 50%, #000000 100%)"
        }).restart()
      }else{
      gsap.to(".bgGradient",{
        duration: 2,
        ease: "power4.out",
        background: "linear-gradient(90deg, #c4c5ff 0%, #FCD2FF 60%)"
      }).restart()}

       let timeline1= gsap.timeline()
       timeline1
       .to(".bgGradientEllipse", { duration: 1, rotate: 450, ease: "power4.inOut",
        background:"linear-gradient(18deg,#BA061A 0%, #151515 50%, #000000 100%)"}, "<")
       .to((`#aboutList7 li`), { duration: 1, opacity: 0, translateX: "-100%", stagger:0.5 }, "<")
       .to((`#aboutList8 li`), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
       let timeline3 = gsap.timeline()
       timeline3.to(("#mockup6"), { duration: 1, opacity: 0, translateY: "-100%", scale:0.2 }, "<")
       .to(("#mockup7"), { duration: 1, opacity: 1, translateX: "0", scale:1}, "<")
       
      },
       onLeaveBack:async()=> {
        console.log('onLeaveBack ', "techStacks")
        await onChangeEnterAnimation("<span id='featureHeading'>User-Friendly Experience:</span>",typewriter,typeRef)
        if(screenCategory === 'mq700' || screenCategory === 'mq500'){
          gsap.to(".bgGradient",{
            duration: 2,
            ease: "power4.out",
            background: "linear-gradient(18deg, #000000 47%, #1D074F 64%, #3F00CE 100%)"
          }).restart()
        }else{
        gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background: "linear-gradient(90deg, rgb(255, 220, 229) 0%, rgb(160, 185, 255) 60%)"
        }).restart()}

        let timeline2 = gsap.timeline()
        timeline2
        .to(".bgGradientEllipse", { duration: 1, rotate: 270, ease: "power4.inOut",
          background:"linear-gradient(18deg, #000000 47%, #1D074F 64%, #3F00CE 100%)"}, "<")
        .to((`#aboutList8 li`), { duration: 1, opacity: 0, translateX: "100%", stagger:0.5 }, "<")
        .to((`#aboutList7 li`), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
        let timeline4 = gsap.timeline()
        timeline4.to(("#mockup7"), { duration: 1, opacity: 0, translateX: "-100%", scale:1 }, "<")
        .to(("#mockup6"), { duration: 1, opacity: 1,translateY:"0%" ,scale:0.9 }, "<")
        
       },
     })

     ScrollTrigger.create({
      id: "finalPage",
       trigger: "#finalPage",
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
       markers:true,
       toggleActions: "play pause resume restart",

       onEnter:async()=> {
        console.log('onEnter ', "finalPage")
       if(screenCategory === 'mq700' || screenCategory === 'mq500'){
        gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background:"linear-gradient(18deg,#70FF00 0%, #151515 64%, #000000 100%)"
        }).restart()
      }else{
          gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background: "linear-gradient(90deg, #A7CDFF 0%, #FFECCF 100%)"
          }).restart()
      }

       let timeline1= gsap.timeline()
       timeline1
       .to(".bgGradientEllipse", { duration: 1, rotate: 450, ease: "power4.inOut",
        background:"linear-gradient(18deg,#70FF00 0%, #151515 64%, #000000 100%)",
        translate: "0 20%"
      }, "<")
       .to((`#aboutList8 li`), { duration: 1, opacity: 0, translateX: "-100%", stagger:0.5 }, "<")
       .to(("#mockup7"), { duration: 1, opacity: 0, translateY: "-100%", scale:0.2 }, "<")
       
      },
       onLeaveBack:async()=> {
        console.log('onLeaveBack ', "finalPage")
        await onChangeEnterAnimation("<span id='featureHeading'>What Tech Stack Has Been Used?:</span>",typewriter,typeRef)
        if(screenCategory === 'mq700' || screenCategory === 'mq500'){
          gsap.to(".bgGradient",{
            duration: 2,
            ease: "power4.out",
            background: "linear-gradient(18deg,#BA061A 0%, #151515 50%, #000000 100%)"
          }).restart()
        }else{
        gsap.to(".bgGradient",{
          duration: 2,
          ease: "power4.out",
          background: "linear-gradient(90deg, #c4c5ff 0%, #FCD2FF 60%)"
        }).restart()}

        let timeline2 = gsap.timeline()
        timeline2
        .to(".bgGradientEllipse", { duration: 1, rotate: 270, ease: "power4.inOut",
          background:"linear-gradient(18deg,#BA061A 0%, #151515 50%, #000000 100%)"}, "<")
        .to((`#aboutList8 li`), { duration: 1, opacity: 1, translateX: 0, stagger:0.5 }, "<")
        .to(("#mockup7"), { duration: 1, opacity: 1,translateY:"0%" ,scale:0.9 }, "<")
       },
     })

  },[bgGifY, onChangeEnterAnimation, onPageEnterAnimation, screenCategory, tl2Global, translateYValues])

  return (
    <div className="h-screen opacity-100 transparent w-full relative z-[70]" id="aboutChefCharm">
      <div className="h-screen transparent w-full fixed z-50 overflow-hidden flex items-center justify-around top-0 left-0 max-[700px]:flex-col pt-12" >
      <div id="laptopMockup" style={{ translate: "-100% 0",opacity:0 }} className="relative left-2 sm:-left-2 h-[550px] max-[1024px]:h-[450px] min-[700px]:-top-12">
        <img id="mockup1" src={LaptopMockup} alt="Chef Charm" className="w-full z-20 object-center absolute top-1/2 -translate-y-1/2 left-0" />
        <img id="mockup2" src={HomePage} alt="Chef Charm" className="w-full z-20 object-center absolute top-1/2 -translate-y-1/2 left-0 opacity-0 -translate-x-full hidden" />
        <img id ="mockup3" src={RecipeMethod} alt="Chef Charm" className="w-full z-20 object-center absolute top-1/2 -translate-y-1/2 left-0 opacity-0 -translate-x-full hidden" />
        <img id ="mockup4" src={RecipeManage} alt="Chef Charm" className="w-full z-20 object-center absolute top-1/2 -translate-y-1/2 left-0 opacity-0 -translate-x-full hidden" />
        <img id ="mockup5" src={listAndMealPlanner} alt="Chef Charm" className="w-full z-20 object-center absolute top-1/2 -translate-y-1/2 left-0 opacity-0 -translate-x-full hidden" />
        <img id ="mockup6" src={colotThemes} alt="Chef Charm" className="w-full z-20 object-center absolute top-1/2 -translate-y-1/2 left-0 opacity-0 -translate-x-full hidden" />
        <img id ="mockup7" src={teckStack2} alt="Chef Charm" className="w-full z-20 object-center absolute top-1/2 -translate-y-1/2 left-0 opacity-0 -translate-x-full" />
      </div>
      <div className='w-full min-[700px]:w-2/3 max-w-[540px]' style={{ height: "90%",position:"relative",padding:"1rem"}}>
        <div ref={typeRef} className="opacity-0 translate-x-full relative top-8 left-0 min-w-[450px] max-[1024px]:min-w-[350px] max-[700px]:top-0" id="typewriter"/>
        <div className='relative mt-2 min-[700px]:mt-4'>
          <ul id="aboutList" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'>It is an innovative recipe web application designed to elevate your cooking experience. </li>
            <li className='opacity-0 translate-x-full mb-4'>It offers a seamless and interactive way to discover, create, and manage recipes, leveraging advanced technologies.</li>
            <li className='opacity-0 translate-x-full mb-4'>It uses AI to bring culinary inspiration to your fingertips.</li>
          </ul>
          <ul id="aboutList2" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'>Whether you&apos;re a professional chef or an enthusiastic home cook, ChefCharm offers a comprehensive suite of features to streamline your recipe discovery, creation, and organization. </li>
            <li className='opacity-0 translate-x-full mb-4'>Let&apos;s delve into the key features that make ChefCharm a must-have tool for every cooking enthusiast</li>
          </ul>
          <ul id="aboutList3" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full hidden">
            <li className='opacity-0 translate-x-full mb-4'>ChefCharm leverages the power of the Edamam API to offer a vast collection of recipes from various cuisines. </li>
            <li className='opacity-0 translate-x-full mb-4'>Users can easily search for recipes using keywords, and the app provides auto-suggestions after typing three or more characters. </li>
            <li className='opacity-0 translate-x-full mb-4'>Additionally, users can refine their searches by applying filters based on meal types, cuisine types and dish types. </li>
          </ul>
          <ul id="aboutList4" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full hidden">
            <li className='opacity-0 translate-x-full mb-4'>ChefCharm offers multiple ways to create and add recipes to your collection. </li>
            <li className='opacity-0 translate-x-full mb-4'>Users can import recipes from websites, PDFs, and images, making it easy to digitize favourite recipes. </li>
            <li className='opacity-0 translate-x-full mb-4'>
            Manual recipe creation is also provided. Additionally, Chef Gemini, also helps craft new recipes with suggestions, making it easy for everyone to cook delicious meals.</li>
          </ul>
          <ul id="aboutList5" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full hidden">
            <li className='opacity-0 translate-x-full mb-4'>Managing your recipe collection is a breeze with ChefCharm. </li>
            <li className='opacity-0 translate-x-full mb-4'>Users can save their rehcipes, add them to their saved and favourite lists separately, edit them to suit personal preferences, and add notes for future reference.  </li>
            <li className='opacity-0 translate-x-full mb-4'>
            The app also tracks your recipe history, allowing you to revisit previously explored recipes. For added convenience, ChefCharm also offers random recipe suggestions.</li>
          </ul>
          <ul id="aboutList6" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full hidden">
            <li className='opacity-0 translate-x-full mb-4'>Users can add ingredients from any recipe directly to their shopping list, ensuring they never miss an item while at the store. </li>
            <li className='opacity-0 translate-x-full mb-4'>The app also allows for meal planning on specific dates, helping users organize their cooking schedule efficiently. </li>
            <li className='opacity-0 translate-x-full mb-4'>
            Additionally, inbuilt timers are provided to manage cooking times</li>
          </ul>
          <ul id="aboutList7" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full hidden">
            <li className='opacity-0 translate-x-full mb-4'>ChefCharm is designed with the user in mind, offering a seamless and personalized experience. </li>
            <li className='opacity-0 translate-x-full mb-4'>Users can log in using their Google, Facebook, or email/password credentials, providing flexible and secure access options.  </li>
            <li className='opacity-0 translate-x-full mb-4'>
            The app also features three distinct themes, allowing users to customize the interface according to their aesthetic preferences.</li>
          </ul>
          <ul id="aboutList8" className="absolute top-0 left-0 max-w-[90%] featuresAboutList max-[700px]:max-w-full">
            <li className='opacity-0 translate-x-full mb-4'><strong>Frontend:</strong> React, MUI, Tailwind CSS. </li>
            <li className='opacity-0 translate-x-full mb-4'><strong>Backend:</strong> Node.js, Express.js </li>
            <li className='opacity-0 translate-x-full mb-4'><strong>Database:</strong> MongoDB, Mongoose </li>
            <li className='opacity-0 translate-x-full mb-4'><strong>Authentication:</strong> Passport.js, JWT </li>
            <li className='opacity-0 translate-x-full mb-4'><strong>API Integration:</strong> Edamam API </li>
            <li className='opacity-0 translate-x-full mb-4'><strong>Caching:</strong> Redis </li>
            <li className='opacity-0 translate-x-full mb-4'><strong>GraphQL:</strong> For efficient data fetching and management </li>
            <li className='opacity-0 translate-x-full mb-4'><strong>AI Integration:</strong> Chef Gemini for recipe creation and suggestions </li>
          </ul>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default AboutChefCharm2