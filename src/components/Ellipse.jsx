import EllipseSvg from '../assets/EllipseSvg.svg'
import PropTypes from 'prop-types';

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
      <div className={`bgGradientEllipse rounded-full overflow-hidden`}>
        <img src={EllipseSvg} alt="Ellipse" className='absolute top-0 left-0 w-full h-full object-cover object-center ellipseSvg'/>
      </div>
    </div>
  )
}

export default Ellipse