import EllipseSvg from '../assets/EllipseSvg.svg'
import PropTypes from 'prop-types';
import trees from '../assets/trees.png'
import billboard from '../assets/billboard.png'
import ChefCharmTitle from '../assets/ChefcharmTItle.png'
import Clouds from '../assets/Clouds.png'

Ellipse.propTypes = {
  height: PropTypes.string,
  idName: PropTypes.string,
}

function Ellipse({height,idName}) {
    // Initialize mq state with the current matchMedia result
    
  return (
    <div className={`z-10 fixed top-0 left-0 right-0 bottom-0 max-w-[1600px] mx-auto overflow-hidden ellipseParent`}  style={{
      height: height,
      minHeight: '100vh',
    }}>
      <img src={Clouds} alt="Clouds" className='absolute top-8 left-0 w-full object-cover object-center clouds z-0 trees opacity-0'/>
      <div className={`bgGradientEllipse ${idName} relative rounded-full z-10`}>
        <img src={ChefCharmTitle} alt="ChefCharmTitle" className='absolute -top-[150px] left-1/2 -translate-x-1/2 w-[250px] object-center trees z-[50] opacity-0'/>
        <img src={billboard} alt="billboard" className='absolute trees -top-[220px] left-1/2 -translate-x-1/2 w-[350px] object-center trees z-10 opacity-0'/>
        <img src={trees} alt="trees" className='absolute -top-[110px] scale-[0.9] left-0 w-full object-center trees z-10 opacity-0'/>
        <img src={EllipseSvg} alt="Ellipse" className='absolute top-0 left-0 w-full h-full object-cover object-center ellipseSvg z-0'/>
        
        <div className='text-white absolute top-[200px] -translate-y-1/2 left-1/2 trees -translate-x-1/2 visit opacity-0 z-20'>
          <p className='text-2xl headingUnderline mb-6 pointer-events-none font-semibold'>Like My Website? Contact me through:</p>
          <div>
            <a href="mailto:ashrimallick0245@gmail.com" className='text-center mb-1 text-xl block hover:text-slate-300'>Email: ashrimallick0245@gmail.com</a>
            <a href='https://www.linkedin.com/in/ashri-mallick-1a04111bb/' target='_blank' className='text-center mb-1 text-xl block hover:text-slate-300'>LinkedIn: Ashri Mallick</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ellipse