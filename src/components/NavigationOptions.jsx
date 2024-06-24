import gsap from 'gsap'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
NavigationOptions.propTypes = {
    setIsSidePanelOpen: PropTypes.func
}

function NavigationOptions({setIsSidePanelOpen}) {
    useEffect(() => {
        const optionsLi = document.querySelectorAll('.optionsLi')
        gsap.to(optionsLi,{
            duration: 1,
            stagger: 0.3,
            bottom: 0,
            ease: 'back.out'
        })
        optionsLi.forEach((option) => {
            option.addEventListener('mouseover',()=>{
                gsap.to(option,{
                    duration: 0.3,
                    backgroundColor: '#4F1D07',
                    color: 'white'
                })
            })
            option.addEventListener('mouseleave',()=>{
                gsap.to(option,{
                    duration: 0.3,
                    backgroundColor: 'white',
                    color: 'black'
                })
            })
        })
    }, [])

  return (
    <div className="absolute z-30 top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-black opacity-50" onClick={()=>setIsSidePanelOpen(false)}></div>
        <div className=" w-full h-auto  absolute top-0 left-0 flex flex-col justify-center items-left gap-4 rounded-md">
            <ul className="text-lg font-semibold">
                <li className="relative bg-white bottom-[500px] optionsLi p-2 pl-4 cursor-pointer rounded-t-md">Home</li>
                <li className="relative bg-white bottom-[500px] optionsLi p-2 pl-4 cursor-pointer">About</li>
                <li className="relative bg-white bottom-[500px] optionsLi p-2 pl-4 cursor-pointer">Features</li>
                <li className="relative bg-white bottom-[500px] optionsLi p-2 pl-4 cursor-pointer rounded-b-md">Tech</li>
            </ul>
        </div>
    </div>
  )
}

export default NavigationOptions