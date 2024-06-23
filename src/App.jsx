// import { useEffect } from 'react'
import './App.css'
// import gsap from 'gsap'
import { Ellipse,ChefCharmIntro,Navigation ,BackgroundGif} from './components'

function App() {
  return (
   <div className='bgGradient min-h-screen'>
    <Navigation/>
    <Ellipse/>
    <BackgroundGif/>
    <ChefCharmIntro/>
   </div>
  )
}

export default App
