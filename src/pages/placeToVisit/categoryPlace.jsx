import { useLocation } from 'react-router-dom'
import placeList from '../../data/places.json'
import { Link } from 'react-router-dom'
import { arrowLeft } from '../../assets/icon'

import './categoryPlace.scss'

function CategoryPlace() {
  const location = useLocation()
  const locationCategory = location.pathname.split('/').at(-1)
  const placeFiltered = placeList.filter((list) =>
    list.category.includes(locationCategory)
  )
  return (
    <main>
      <div className="category-up">
        <Link to={'/place-to-visit'}>
          <button>{arrowLeft}</button>
        </Link>
        <h1 className="category-title">{locationCategory}</h1>
      </div>

      <div className="category-card">
        {placeFiltered.map((list, index) => (
          <Link
            to={`/place-to-visit/${locationCategory}/${list.id}`}
            key={index}
          >
            <figure>
              <img src={list.image} alt={list.title} />
              <figcaption>
                <h3>{list.title}</h3>
                <p>{list.description}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default CategoryPlace
