import { useEffect, useState } from 'react'
import './slider.scss'

function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % props.length)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  })
  return (
    <div className="slider">
      <img src={props.image[currentIndex]} alt={props.alt} className='slider-img'/>
    </div>
  )
}

export default Slider
