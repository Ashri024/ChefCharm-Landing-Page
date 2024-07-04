import { useEffect, useState } from 'react'
import './App.css'
import { Ellipse,ChefCharmIntro2,Navigation ,BackgroundGif,NavigationOptions,ContentBox, AboutChefCharm, FinalPage} from './components'
function setHeightBgGradient() {
  const targetElement = document.querySelector('.bgGradient');
  if (targetElement) {
    return `${targetElement.offsetHeight}px`;
  }
}

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    window.scrollTo(0,0)
    setHeight(setHeightBgGradient())
  }, [])

  return (
   <div className='bgGradient'>
    <Navigation setIsSidePanelOpen={setIsSidePanelOpen} />
    { isSidePanelOpen &&
      <NavigationOptions setIsSidePanelOpen={setIsSidePanelOpen} />
    }
    {/* <Experiment/> */}
     <Ellipse height={height} idName={"ellipse1"} />
    <BackgroundGif height={height}/>
     <ContentBox/>
     <ChefCharmIntro2/>
     <div className="h-[300vh] bg-red-200 opacity-50 transparent w-full relative z-50" id="introChefCharm">
    </div>
     <div className=" h-[100vh] opacity-50 transparent w-full relative z-50 emptySpace bg-orange-300">
    </div>
    <AboutChefCharm height={height} />
     <div className=" h-[50vh] bg-orange-300 opacity-50 transparent w-full relative z-50 emptySpace"></div>
     <div className="h-screen bg-red-200 opacity-50 transparent w-full relative z-50" id="aboutChefCharm2">
    </div>
    <div className=" h-[50vh] opacity-50 transparent w-full relative z-50 emptySpace"></div>
    <div className="h-screen  opacity-50 transparent w-full relative z-50" id="featuresPart1">
    </div>
    <div className=" h-[50vh] opacity-50 transparent w-full relative z-50 emptySpace"></div>
    <div className="h-screen  opacity-50 transparent w-full relative z-50" id="featuresPart2"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full relative z-50 emptySpace"></div>
    <div className="h-screen  opacity-50 transparent w-full relative z-50" id="featuresPart3"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full relative z-50 emptySpace"></div>
    <div className="h-screen  opacity-50 transparent w-full relative z-50" id="featuresPart4"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full relative z-50 emptySpace"></div>
    <div className="h-screen  opacity-50 transparent w-full relative z-50" id="featuresPart5"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full relative z-50 emptySpace"></div>
    <div className="h-screen  opacity-50 transparent w-full relative z-50" id="techStacks"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full relative z-50 emptySpace"></div>
    <div className='flex items-center justify-around w-full fixed top-[95vh] left-0 text-lg text-gray-200 z-[100] trees opacity-0'>
        <span className='hover:underline cursor-pointer'>Go to Start</span>
        <span className='hover:underline cursor-pointer'>Visit ChefCharm</span>
        <span className='hover:underline cursor-pointer'>LinkedIn</span>
        <span className='hover:underline cursor-pointer'>Email</span>
      </div>
    <FinalPage/>
   </div>
  )
}

export default App
