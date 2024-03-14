import Slider from '../slider/slider'
import './banner.scss'

function Banner(props) {
  const data = props.list
  return (
    <div className="banner">
      <div className="banner-contain">
        <h1 className="banner-title">{props.title}</h1>
        <p className="banner-description">{props.description}</p>
      </div>
      {data.map((list, index) => (
        <Slider
          key={index}
          image={list.image}
          alt={list.alt}
          length={list.image.length}
        />
      ))}
    </div>
  )
}

export default Banner
