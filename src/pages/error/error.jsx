import { Link } from 'react-router-dom'
import errorImg from '../../assets/error.webp'
import './error.scss'

function Error() {
  return (
    <main>
      <section className="error">
        <figure>
          <img src={errorImg} alt="logo error 404 de style steampunk" />
          <figcaption>
            <h1>Page non trouvée</h1>
            <p>
              La page que vous recherchez n'existe pas ou n'est pas disponible.
              <br />
            </p>
            <Link to={'/'}>Retour sur la page d'acceuil</Link>
          </figcaption>
        </figure>
      </section>
    </main>
  )
}

export default Error
