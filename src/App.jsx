import { useState } from 'react'
import './App.css'
import { Ellipse,ChefCharmIntro,Navigation ,BackgroundGif,NavigationOptions,ContentBox} from './components'

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  return (
   <div className='bgGradient min-h-[2000px]'>
    <Navigation setIsSidePanelOpen={setIsSidePanelOpen} />
    { isSidePanelOpen &&
      <NavigationOptions setIsSidePanelOpen={setIsSidePanelOpen} />
    }
    <Ellipse/>
    <BackgroundGif/>
    <ContentBox/>
    <ChefCharmIntro/>
   </div>
  )
}

export default App
