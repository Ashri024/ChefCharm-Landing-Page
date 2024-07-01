import { useEffect, useState } from 'react'
import './App.css'
import { Ellipse,ChefCharmIntro2,Navigation ,BackgroundGif,NavigationOptions,ContentBox, AboutChefCharm} from './components'
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
     <Ellipse height={height}/>
    <BackgroundGif height={height}/>
     <ContentBox/>
     <ChefCharmIntro2/>
     <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="introChefCharm">
    </div>
     <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace">
    </div>
    <AboutChefCharm/> 
     <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace"></div>
     <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="aboutChefCharm2">
    </div>
    <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace"></div>
    <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="featuresPart1">
    </div>
    <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace"></div>
    <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="featuresPart2"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace"></div>
    <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="featuresPart3"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace"></div>
    <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="featuresPart4"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace"></div>
    <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="featuresPart5"> </div>
    <div className=" h-[50vh] opacity-50 transparent w-full bg-orange-200 relative z-50 emptySpace"></div>
    <div className="h-screen bg-blue-200 opacity-50 transparent w-full relative z-50" id="techStacks"> </div>
    
   </div>
  )
}

export default App
