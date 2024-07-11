import gsap from 'gsap'
import {  useEffect, useContext, } from 'react';
import { AnimationContext } from '../contexts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaptopMockup from "../assets/Laptop.png";
import Ellipse from './Ellipse';
import PropTypes from 'prop-types';
import ListSet from './ListSet';
import ListSetFeatures from './ListSetFeatures';
import HomePage from '../assets/HomePageChefCharm.png';
import RecipeMethod from '../assets/MultiMode.png';
import RecipeManage from '../assets/RecipeManage.png';
import colotThemes from '../assets/ColorThemes.png';
import listAndMealPlanner from '../assets/listAndMealPlanner.png';
import teckStack2 from '../assets/techStackFinal.png';
import FinalPage from './FinalPage';
import BackgroundGif from './BackgroundGif';
import ContentBox from './ContentBox';

AboutChefCharm2.propTypes = {
  height: PropTypes.string,
}

gsap.registerPlugin(ScrollTrigger);
function ellipse2Translate(screenCategory){
  if(screenCategory === 'mq1024') {
    let translateX = "30%";
    let translateY = "-17%";
    return {translateX, translateY}
  }
  else {
    let translateX = "40%";
    let translateY = "-20%";
    return {translateX, translateY}
  }
}
function bgGradient2(gradient1, gradient2,screen){
  if(screen === 'mq768' || screen === 'mq500'){
    return gradient1
  }
    return gradient2
}
function position(screen){
  if(screen === 'mq768' || screen === 'mq500'){
    return "absolute"
  }
    return "fixed"
}

function AboutChefCharm2({height}) {
  const {screenCategory,translateYValues,tl2Global,onPageEnterAnimation,onChangeEnterAnimation,bgGifY} = useContext(AnimationContext);
  let featureList1= ["ChefCharm leverages the power of the Edamam API to offer a vast collection of recipes from various cuisines.","Users can easily search for recipes using keywords, and the app provides auto-suggestions after typing three or more characters.","Additionally, users can refine their searches by applying filters based on meal types, cuisine types and dish types."]
  let featureList2= ["ChefCharm offers multiple ways to create and add recipes to your collection.","Users can import recipes from websites, PDFs, and images, making it easy to digitize favorite recipes. ","Manual recipe creation is also provided. Additionally, Chef Gemini also helps craft new recipes with suggestions, making it easy for everyone to cook delicious meals."]
  let featureList3= ["Managing your recipe collection is a breeze with ChefCharm.","Users can save their recipes, add them to their saved and favorite lists separately, edit them to suit personal preferences, and add notes for future reference. ","The app also tracks your recipe history, allowing you to revisit previously explored recipes. For added convenience, ChefCharm also offers random recipe suggestions."]
  let featureList4=["Users can add ingredients from any recipe directly to their shopping list, ensuring they never miss an item while at the store. ","The app also allows for meal planning on specific dates, helping users organize their cooking schedule efficiently.","Additionally, built-in timers are provided to manage cooking times, ensuring that every dish is cooked to perfection."]
  let featureList5=["ChefCharm is designed with the user in mind, offering a seamless and personalized experience. ","Users can log in using their Google, Facebook, or email/password credentials, providing flexible and secure access options.","The app also features three distinct themes, allowing users to customize the interface according to their aesthetic preferences."]
  let techStackArr=[{title:"Frontend",text:"React, MUI, Tailwind CSS"},{title:"Backend",text:"Node.js, Express, MongoDB Atlas, Mongoose"},
    {title:"Authentication",text:"Passport.js, JWT, Bcrypt, OAuth2.0"},
    {title:"Caching & State Management", text:"Redis, React-Query, useContext"},
    {title:"APIs",text:"Edamam, Google OAuth, Gemini API, Axios"},{title:"Tools & VCs",text:"Figma, Thunder Client, VS Code, Vite, Git, GitHub"},
    {title: "GraphQL", text: "Apollo Client, Apollo Server"},
    {title: "Data Extraction & Processing", text: "Cheerio (Web Scraping), Tesseract.js (OCR)"}
  ]

  useEffect(() => {
  
    if(!tl2Global) return;
   let topOffset="";
    gsap.set(".ellipse2", { translateX:"100%", immediateRender:true })

    let tl= gsap.timeline({defaults: { ease: "power4.out" }});
   
    let tlTemp = gsap.timeline({defaults:{ease:"power4.out"}})

    ScrollTrigger.create({
      // animation: tl,
      trigger: "#aboutChefCharm",
      start: "top 20%",
      end: "bottom bottom",
      id: "aboutChefCharm",
      // markers: true,
      toggleActions: "restart none none reverse",
      onEnter: () => {
        // gsap.killTweensOf(tl)
        tl.to("#mockup1", {
          duration: 0.5,
          position: position(screenCategory),
          top:screenCategory ==="mq500" || screenCategory ==="mq768"? "0":"3rem",
          left:"0",
          translateX:0,
          opacity:1
        })
        .to("#heading1", { duration: 0.5, opacity: 1, translateX: 0 },"<")
        .to("#aboutList li", { duration: 0.5, opacity: 1, translateX: 0, stagger: 0.1 },"<")
        tlTemp.to("#bgGifLottie2", { duration: 0.5, 
          rotate:screenCategory ==="mq500" || screenCategory ==="mq768"? 180:90,
          scale:screenCategory ==="mq500" || screenCategory ==="mq768"? 0.9:0.7,
          top:bgGifY(screenCategory).bgGifTopIntro,
          translateX:screenCategory ==="mq500" || screenCategory ==="mq768"? "0":"-40%",
          translateY: 0 },"<")
        .to("#bgGif2",{
          duration: 0.5,
          // top:"-16rem",
          opacity:1,
          ease: "power1.in"
        }, "<")
        tlTemp.restart()
        tl.restart()
        gsap.killTweensOf(".ellipse2")
        gsap.set(".ellipseParent2, #bgGif2",{
          // duration:0.5,
          position: "fixed",
        })
        gsap.to(".ellipse2", { duration: 0.5, translateX: ellipse2Translate(screenCategory).translateX,
          translateY: ellipse2Translate(screenCategory).translateY,rotate: 180, ease: "power4.inOut",
          background:"linear-gradient(270deg, #000000 0%, #4F1D07 40%, #4F1D07 100%)",
          // position:
          })
        console.log("AboutChefCharm2 entered")
      },
      onLeaveBack: async() => {  
        console.log("AboutChefCharm2 left back")
        console.log(document.querySelector(".ellipse2").style.transform)
        tl.timeScale(3).reverse()
        tlTemp.timeScale(3).reverse()
        // gsap.killTweensOf(".ellipseParent2, #bgGif2")
        gsap.set(".ellipseParent2, #bgGif2",{
          position: "absolute",
        })
        gsap.killTweensOf(".ellipse2")
        gsap.to(".ellipse2", { duration: 1, rotate: 90, translateX:"100%", ease: "power4.inOut",})
        // }
       
      },
      onLeave: () => {
        // Select the parent container and the mockup element
        const parentContainer = document.querySelector('#mockupParent1');
        const mockupElement = document.querySelector('#mockup1');
        const parentRect = parentContainer.getBoundingClientRect();
        const mockupRect = mockupElement.getBoundingClientRect();
        const offsetTop = mockupRect.top - parentRect.top;
        topOffset=offsetTop;
        tl.pause()
        if(screenCategory !== 'mq768' && screenCategory !== 'mq500'){
          gsap.set("#mockup1", {
            position: "absolute",
            duration: 1,
            top: topOffset,
            ease: "power4.inOut",
            immediateRender: true,
          });
        }
        console.log("AboutChefCharm2 left")
      },
      onEnterBack: () => {
        if(screenCategory !== 'mq768' && screenCategory !== 'mq500'){
        gsap.set("#mockup1", {
          position:"fixed",
          top:"3rem",
          left:"0",
          immediateRender: true,
        });
      }
        tl.resume()
      }
    })

    let tl2 = gsap.timeline({defaults: { ease: "power4.out" }});
        tl2
        .to("#heading2", { duration: 0.5, opacity: 1, translateX: 0 },"<")
        .to("#aboutList2 li", { duration: 0.5, opacity: 1, translateX: 0, stagger: 0.1 })
    ScrollTrigger.create({
      trigger: "#list2",
      start: "top 90%",
      end: "bottom bottom",
      id: "list2",
      toggleActions: "restart none none reverse",
      // markers: true,
      animation: tl2,
    })

    let tl4 = gsap.timeline({defaults: { ease: "power4.inOut" }});

    ScrollTrigger.create({
      trigger: "#feature1",
      start: "top 90%",
      end: "bottom bottom",
      id: "feature1",
      toggleActions: "restart none none reverse",
      // markers: true,
      animation: tl4,
      onEnter:()=>{
        gsap.to(".ellipse2", { duration: 1,rotate: 270, ease: "power4.inOut", background:"linear-gradient(18deg, #000000 47%, #1D074F 64%, #3F00CE 100%)" })
        gsap.to(".bgGradient2",{
          duration: 2,
          ease: "power4.out",
          background:bgGradient2("linear-gradient(90deg, rgb(255, 220, 229) 0%, rgb(160, 185, 255) 150%)",
            
            "linear-gradient(90deg, rgb(255, 220, 229) 0%, rgb(160, 185, 255) 60%)",screenCategory)
          // background:"linear-gradient(90deg, rgb(255, 220, 229) 0%, rgb(160, 185, 255) 60%)"
        }).restart()
      },
      onLeaveBack:()=>{
        gsap.to(".ellipse2", { duration: 1,rotate: 180, ease: "power4.inOut", background:"linear-gradient(270deg, #000000 0%, #4F1D07 40%, #4F1D07 100%)" })
        gsap.to(".bgGradient2",{
          duration: 2,
          ease: "power4.out",
          // background: bgGradient2("linear-gradient(268deg, rgb(0, 0, 0) 0%, rgb(79, 29, 7) 50%, rgb(79, 29, 7) 100%)","linear-gradient(90deg, #B9B9B9 0%, #FFD9D9 60%)",screenCategory)
          background:"linear-gradient(90deg, #B9B9B9 0%, #FFD9D9 60%)"
        }).restart()
      }
    })
    let tl5 = gsap.timeline({defaults: { ease: "power4.inOut" }});
    ScrollTrigger.create({
      trigger: "#techStacks",
      start: "top 90%",
      end: "bottom bottom",
      id: "techStacks",
      toggleActions: "restart none none reverse",
      // markers: true,
      animation: tl5,
      onEnter:()=>{
        gsap.to(".ellipse2", { duration: 1, rotate: 450, ease: "power4.inOut", background:"linear-gradient(18deg,#BA061A 0%, #151515 50%, #000000 100%)" })
        gsap.to(".bgGradient2",{
          duration: 2,
          ease: "power4.out",
          // background:bgGradient2("linear-gradient(85deg, rgb(186, 6, 26) 0%, rgb(21, 21, 21) 50%, rgb(0, 0, 0) 100%)","linear-gradient(90deg, #c4c5ff 0%, #FCD2FF 60%)",screenCategory)
          background:"linear-gradient(90deg, #c4c5ff 0%, #FCD2FF 60%)"
        }).restart()
      },
      onLeaveBack:()=>{
        gsap.to(".ellipse2", { duration: 1, rotate: 270, ease: "power4.inOut", background:"linear-gradient(18deg, #000000 47%, #1D074F 64%, #3F00CE 100%)" })
        gsap.to(".bgGradient2",{
          duration: 2,
          ease: "power4.out",
          // background: bgGradient2("linear-gradient(271deg, rgb(0, 0, 0) 0%, rgb(29, 7, 79) 64%, rgb(63, 0, 206) 100%)","linear-gradient(90deg, rgb(255, 220, 229) 0%, rgb(160, 185, 255) 60%)",screenCategory)
          background:"linear-gradient(90deg, rgb(255, 220, 229) 0%, rgb(160, 185, 255) 150%)"
        }).restart()
      }
    })
    function ellipseTop(){
      if(screenCategory === 'mq1024') {
        return "35%"
      }else if(screenCategory === 'mq1280'){
        return "25%"
      }
      else {
        return "20%"
      }
    }

    ScrollTrigger.create({
      id: "finalPage",
       trigger: "#finalPage",
       start: "top 90%",
       end: "bottom bottom",
       scrub: 1,
      //  markers:true,
       toggleActions: "restart none none reverse",

       onEnter:async()=> {
        console.log('onEnter ', "finalPage")
       

       let timeline1= gsap.timeline()
       timeline1
       .to(".ellipse2", { duration: 1, rotate: 360, ease: "power4.inOut",
        background:"linear-gradient(187deg, rgb(112, 255, 0) 0%, rgb(21, 21, 21) 64%, rgb(0, 0, 0) 100%)",
        translateX: 0,
        translateY:ellipseTop()
      }, "<")
      .to("#bgGif2", { duration: 0.5, opacity:0},"<")
       .to(".headingUnderline", { duration: 0.5, color:"#000"}, "<")
      .to(".trees", { duration: 0.5, opacity: 1},"<" )
      

      gsap.to(".bgGradient2",{
        duration: 2,
        ease: "power4.out",
        // background:bgGradient2("linear-gradient(85deg, rgb(112, 255, 0) 0%, rgb(21, 21, 21) 64%, rgb(0, 0, 0) 100%)","linear-gradient(90deg, #A7CDFF 0%, #FFECCF 100%)",screenCategory)
        background:"linear-gradient(90deg, #A7CDFF 0%, #FFECCF 100%)"
      }).restart()
       
      },
       onLeaveBack:async()=> {
        console.log('onLeaveBack ', "finalPage")
        gsap.to(".bgGradient2",{
          duration: 2,
          ease: "power4.out",
          // background: bgGradient2("linear-gradient(85deg, rgb(186, 6, 26) 0%, rgb(21, 21, 21) 50%, rgb(0, 0, 0) 100%)","linear-gradient(90deg, #c4c5ff 0%, #FCD2FF 60%)",screenCategory)
          background:"linear-gradient(90deg, #c4c5ff 0%, #FCD2FF 60%)"
        }).restart()

        let timeline2 = gsap.timeline()
        timeline2
        .to(".ellipse2", { duration: 1, rotate: 450, ease: "power4.inOut",
          background:"linear-gradient(18deg,#BA061A 0%, #151515 50%, #000000 100%)",
          translateX: "40%",
          translateY: "-20%"
        }, "<")
        .to(".headingUnderline", { duration: 0.5, color:"#fff"}, "<")
      .to(".trees", { duration: 0.5, opacity: 0},"<" )
       .to("#bgGif2", { duration: 0.5, opacity:1})
       },
     })

  },[bgGifY, onChangeEnterAnimation, onPageEnterAnimation, screenCategory, tl2Global, translateYValues])

  return (
    <div className=" opacity-100 transparent w-full relative z-[70]" >
      <div className='relative w-full h-full z-20'>
     <ContentBox/>
     </div>
      <div className='absolute top-0 left-0 w-full h-full opacity-100 bgGradient2 z-30'></div>

      <Ellipse height={height} idName={"ellipse2"} parentName='ellipseParent2' />
      <BackgroundGif height={height} idName='bgGif2' idLottie='bgGifLottie2'/>
      <ListSet LaptopMockup={LaptopMockup} />
      <ListSetFeatures featureId={"feature1"} LaptopMockup={HomePage} heading={"Comprehensive Recipe Search"} listArray={featureList1} mockupParentId={"mockupParent3"} mockupId={"mockup3"} headingId={"heading3"} listId={"aboutList3"}/>

      <ListSetFeatures featureId={"feature2"} LaptopMockup={RecipeMethod} heading={"Multi-Method Recipe Creation:"} listArray={featureList2} mockupParentId={"mockupParent4"} mockupId={"mockup4"} headingId={"heading4"} listId={"aboutList4"}/>
      <ListSetFeatures featureId={"feature3"} LaptopMockup={RecipeManage} heading={"Recipe Management:"} listArray={featureList3} mockupParentId={"mockupParent5"} mockupId={"mockup5"} headingId={"heading5"} listId={"aboutList5"}/>
      <ListSetFeatures featureId={"feature4"} LaptopMockup={listAndMealPlanner} heading={"Shopping and Meal Planning:"} listArray={featureList4} mockupParentId={"mockupParent6"} mockupId={"mockup6"} headingId={"heading6"} listId={"aboutList6"}/>
      <ListSetFeatures featureId={"feature5"} LaptopMockup={colotThemes} heading={"User-Friendly Experience:"} listArray={featureList5} mockupParentId={"mockupParent7"} mockupId={"mockup7"} headingId={"heading7"} listId={"aboutList7"}/>
      <ListSetFeatures featureId={"techStacks"} LaptopMockup={teckStack2} heading={"What Tech Stack Has Been Used?"} listArray={techStackArr} mockupParentId={"mockupParent8"} mockupId={"mockup8"} headingId={"heading8"} listId={"aboutList8"} isTech/>
      <div className=" h-[10vh] opacity-50 transparent w-full relative z-50 emptySpace" id="aboutEmpty">
    </div>
      <FinalPage/>
    </div>
  )
}

export default AboutChefCharm2