import { useEffect, useState } from 'react'
import './App.css'
import { Ellipse,ChefCharmIntro2,Navigation ,BackgroundGif,NavigationOptions,ContentBox, AboutChefCharm2} from './components'
// import gsap from 'gsap'
// import { ScrollToPlugin } from 'gsap/all'

// setting the height of the ellipse to the height of the bgGradient
function setHeightBgGradient() {
  const targetElement = document.querySelector('.bgGradient');
  if (targetElement) {
    return `${targetElement.offsetHeight}px`;
  }
}

function App() {
  // gsap.registerPlugin(ScrollToPlugin)
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [height, setHeight] = useState('0px')
  // const [introTl, setIntroTl] = useState(null)

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
     <div className="h-screen bg-blue-300 opacity-50 transparent w-full relative z-50" id="introChefCharm">
    </div>
     <div className=" h-[50vh] bg-orange-300 opacity-50 transparent w-full relative z-50 emptySpace">
    </div>
    <AboutChefCharm2/> 
     <div className=" h-[50vh] bg-orange-300 opacity-50 transparent w-full relative z-50 emptySpace">
    </div>
    <div className="h-screen bg-blue-300 opacity-50 transparent w-full relative z-50" id="aboutChefCharm2">
    </div>
   </div>
  )
}

export default App
