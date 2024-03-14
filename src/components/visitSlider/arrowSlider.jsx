import { useState } from 'react'
import { arrowLeft, arrowRight } from '../../assets/icon'

function ArrowSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRight = () => {
    setCurrentIndex((currentIndex + 1) % props.length)
  }
  const slideLeft = () => {
    setCurrentIndex((currentIndex - 1 + props.length) % props.length)
  }
  const size = props.size
  const sliderItems = () => {
    const items = [];
    for (let i = 0; i < size; i++) {
      items.push(
        <div className="slider-contain" key={props.list[currentIndex + i].id}>
          <span className="slider-title">
            {props.list[currentIndex + i].title}
          </span>
          <img
            src={props.list[currentIndex + i].image}
            alt={props.list[currentIndex + i].title}
            className="slider-img"
          />
        </div>
      );
    }
    return items;
  }
  return (
    <div className="visit-slider">
      <button className="arrow arrow-left" onClick={slideLeft}>
        {arrowLeft}
      </button>
      {sliderItems()}
      <button className="arrow arrow-right" onClick={slideRight}>
        {arrowRight}
      </button>
    </div>
  )
}

export default ArrowSlider
