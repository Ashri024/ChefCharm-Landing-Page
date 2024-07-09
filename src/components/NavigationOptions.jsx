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
            stagger: 0.1,
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
    function navigateInstantly(e) {
        console.log("navigateInstantly")    
        e.preventDefault(); // Prevent default anchor behavior
        const target = e.target.getAttribute('href'); // Get the href attribute of the clicked link
        window.location.hash = target; // Change the hash directly, causing an instant jump to the target
        setIsSidePanelOpen(false)
      }
  return (
    <div className="fixed z-[1000] top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-black opacity-50" onClick={()=>setIsSidePanelOpen(false)}></div>
        <div className=" w-full h-auto  absolute top-0 left-0 flex flex-col justify-center items-left gap-4 rounded-md">
            <ul className="text-lg font-semibold">
                <li className=" p-2 px-0 relative bg-white bottom-[500px] optionsLi cursor-pointer rounded-t-md"> <a className=' block p-2 pl-4' onClick={(e)=>navigateInstantly(e)} href="#introChefCharm"> Home</a></li>
                <li className=" p-2 px-0 relative bg-white bottom-[500px] optionsLi cursor-pointer"> <a className=' block p-2 pl-4' onClick={(e)=>navigateInstantly(e)} href="#whatAbout"> About</a></li>
                <li className=" p-2 px-0 relative bg-white bottom-[500px] optionsLi cursor-pointer"> <a className=' block p-2 pl-4' onClick={(e)=>navigateInstantly(e)} href="#mockupParent3"> Features</a></li>
                <li className=" p-2 px-0 relative bg-white bottom-[500px] optionsLi cursor-pointer rounded-b-md"> <a className=' block p-2 pl-4' onClick={(e)=>navigateInstantly(e)} href="#mockupParent8"> Tech</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavigationOptions