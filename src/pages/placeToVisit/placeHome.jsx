import './placeHome.scss'
import compassIcon from '../../assets/compass_icon.webp'
import historicalImg from '../../assets/historical.webp'
import templeImg from '../../assets/temple.webp'
import parkImg from '../../assets/park.webp'
import schoolImg from '../../assets/school.webp'
import arrowSliderList from '../../data/places.json'
import ArrowSlider from '../../components/arrowSlider/arrowSlider'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function PlaceHome() {
  const bannerList = [
    {
      image: historicalImg,
      alt: "Photo d'un lieu historique de Steamwick",
      title: 'Historique',
      category: 'Historique',
    },
    {
      image: templeImg,
      alt: "Photo d'un temple de Steamwick",
      title: 'Culturel',
      category: 'Culturel',
    },
    {
      image: parkImg,
      alt: "Photo d'un parc de Steamwick",
      title: 'Parc',
      category: 'Parc',
    },
    {
      image: schoolImg,
      alt: "Photo d'une école de Steamwick",
      title: 'Educatif',
      category: 'Educatif',
    },
  ]

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [onMobile, setOnMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (screenWidth <= 768) {
      setOnMobile(true)
    } else {
      setOnMobile(false)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenWidth])

  return (
    <main>
      <article className="place-title">
        <h1>Endroit à visiter</h1>
      </article>
      <section className="place-banner">
        <img
          src={compassIcon}
          alt="représentation d'une rose des vents "
          className="banner-compass"
        />
        <article>
          {bannerList.map((list) => (
            <Link to={`/place-to-visit/${list.category}`} key={list.category}>
              <div className="banner-elmt">
                <img src={list.image} alt={list.alt} />
                <p>{list.title}</p>
              </div>
            </Link>
          ))}
        </article>
      </section>
      <section className="popular">
        <h2>Les plus populaires</h2>
        <ArrowSlider
          length={arrowSliderList.length}
          list={arrowSliderList}
          size={onMobile ? 2 : 3}
        />
      </section>
    </main>
  )
}

export default PlaceHome
