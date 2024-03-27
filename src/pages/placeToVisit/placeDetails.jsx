import { useLocation } from 'react-router-dom'
import placeList from '../../data/places.json'

function PlaceDetails() {
  const location = useLocation()
  const locationId = location.pathname.split('/').at(-1)
  const placeFiltered = placeList.find((list) => list.id === parseInt(locationId))

  return (
    <main className="place-details">
      <h2>{placeFiltered.title}</h2>
      <article>
        <img src={placeFiltered.image} alt={placeFiltered.title} />
        <div className="place-card">
          <section className="place-information">
            <p>
              <strong>Prix d'entrée : {placeFiltered.price}</strong>
            </p>
            <p>
              <strong>Horaires : : {placeFiltered.open_time}</strong>
            </p>
            <p>
              <strong>Temps de visite : {placeFiltered.time}</strong>
            </p>
            <p>
              <strong>
                Station la plus proche : {placeFiltered.transport}
              </strong>
            </p>
          </section>
          <p>
            A propos : <br />
            {placeFiltered.description}
          </p>
          <p>
            Petite histoire : <br />
            {placeFiltered.history}
          </p>
        </div>
      </article>
    </main>
  )
}

export default PlaceDetails
