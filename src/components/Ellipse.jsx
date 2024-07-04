import EllipseSvg from '../assets/EllipseSvg.svg'
import PropTypes from 'prop-types';
import trees from '../assets/trees.png'
import billboard from '../assets/billboard.png'
import ChefCharmTitle from '../assets/ChefcharmTItle.png'

Ellipse.propTypes = {
  height: PropTypes.string,
}

function Ellipse({height}) {
    // Initialize mq state with the current matchMedia result
    
  return (
    <div className="z-10 fixed top-0 left-0 right-0 bottom-0 max-w-[1600px] mx-auto overflow-hidden max-[700px]:hidden" id="ellipseParent" style={{
      height: height,
      minHeight: '100vh',
    }}>
      
      <div className={`bgGradientEllipse relative rounded-full z-0`}>
        <img src={ChefCharmTitle} alt="ChefCharmTitle" className='absolute -top-[150px] left-1/2 -translate-x-1/2 w-[250px] object-center trees z-[50] opacity-0'/>
        <img src={billboard} alt="billboard" className='absolute trees -top-[220px] left-1/2 -translate-x-1/2 w-[350px] object-center trees z-10 opacity-0'/>
        <img src={trees} alt="trees" className='absolute -top-[110px] scale-[0.9] left-0 w-full object-center trees z-10 opacity-0'/>
        <img src={EllipseSvg} alt="Ellipse" className='absolute top-0 left-0 w-full h-full object-cover object-center ellipseSvg z-0'/>
        <div className='text-white absolute top-[200px] -translate-y-1/2 left-1/2 trees -translate-x-1/2 visit opacity-0'>
          <p className='text-2xl headingUnderline mb-6'>Like My Website? Contact me through:</p>
          <div>
            <p className='text-center text-xl'>Email: ashriarya@gmail.com</p>
            <p className='text-center text-xl'>LinkedIn: www.linkedin.come</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ellipse