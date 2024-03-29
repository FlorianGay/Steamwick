import mapImg from '../../assets/steamwick_map.webp'
import './map.scss'

function Map() {
  return (
    <main>
      <section className="map">
        <img
          src={mapImg}
          alt="Représentation générique de la ville de Steamwick"
        />
      </section>
    </main>
  )
}

export default Map
