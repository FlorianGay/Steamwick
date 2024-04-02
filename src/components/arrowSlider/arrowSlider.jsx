import { useState } from 'react'
import { arrowLeft, arrowRight } from '../../assets/icon'
import './arrowSlider.scss'
import { Link } from 'react-router-dom'

function ArrowSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRight = () => {
    setCurrentIndex((currentIndex + 1) % props.list.length)
  }
  const slideLeft = () => {
    setCurrentIndex((currentIndex - 1 + props.list.length) % props.list.length)
  }
  const size = props.size
  const sliderItems = () => {
    const items = [];
    for (let i = 0; i < size; i++) {
      const index = (currentIndex + i) % props.list.length;
      items.push(
        <Link className="slider-contain" key={props.list[index].id} to={`/place-to-visit/${props.list[index].category}/${props.list[index].id}`}>
          <span className="slider-title">
            {props.list[index].title}
          </span>
          <img
            src={props.list[index].image}
            alt={props.list[index].title}
            className="slider-img"
          />
        </Link>
      );
    }
    return items;
  }
  return (
    <div className="arrow-slider">
      <button className="arrow " onClick={slideLeft}>
        {arrowLeft}
      </button>
      {sliderItems()}
      <button className="arrow " onClick={slideRight}>
        {arrowRight}
      </button>
    </div>
  )
}

export default ArrowSlider
