import { useEffect, useState } from 'react'
import './App.css'
import { Ellipse,ChefCharmIntro2,Navigation ,BackgroundGif,NavigationOptions,ContentBox, AboutChefCharm} from './components'
import gsap, { ScrollToPlugin } from 'gsap/all';
function setHeightBgGradient() {
  const targetElement = document.querySelector('.bgGradient');
  if (targetElement) {
    return `${targetElement.offsetHeight}px`;
  }
}
gsap.registerPlugin(ScrollToPlugin)
function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 })
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
     <div className="h-[300vh] opacity-50 transparent w-full relative z-50" id="introChefCharm">
    </div>
     <div className=" h-[100vh] opacity-50 transparent w-full relative z-50 emptySpace">
    </div>
    <AboutChefCharm height={height} />
    
    <div className='flex items-center justify-around w-full fixed top-[95vh] left-0 text-lg text-gray-200 z-[100] trees opacity-0'>
        <span className='hover:underline cursor-pointer'>Go to Start</span>
        <span className='hover:underline cursor-pointer'>Visit ChefCharm</span>
        <span className='hover:underline cursor-pointer'>LinkedIn</span>
        <span className='hover:underline cursor-pointer'>Email</span>
      </div>
   </div>
  )
}

export default App
