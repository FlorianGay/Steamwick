//import { Link } from 'react-router-dom'
import Banner from '../../components/banner/banner'
import './home.scss'
import ArrowSlider from '../../components/arrowSlider/arrowSlider'
import arrowSliderList from '../../data/places.json'

function Home() {
  const homeList = [
    {
      image: [
        'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_1.webp',
        'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_2.webp',
        'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_2.webp',
        'https://storage.googleapis.com/florian_gay_image/Projet%20entrainement/slide_4.webp',
      ],
      alt: 'City Photography ',
    },
  ]

  return (
    <main>
      <Banner
        title={'Bienvenue à Steamwick'}
        description={'Explorez la citée héritière du royaume'}
        list={homeList}
      />
      <section className="home-description heiress">
        <h2>Pourquoi héritière ?</h2>
        <p>
          Au cœur des terres oubliées, entre les vapeurs épaisses des machines
          et les rouages en constante effervescence, se dresse la majestueuse
          ville de Steamwick. Connue comme l'héritière incontestée du royaume,
          ses origines sont ancrées dans les récits d'une ère révolue, où les
          technologies d'antan coexistaient harmonieusement avec la magie
          ancestrale. Jadis un bastion de prospérité, Steamwick reste un
          témoignage vivant de l'ingéniosité de ses fondateurs, des artisans et
          des alchimistes qui ont façonné ses rues pavées de laiton et ses tours
          majestueuses. C'est ici, au creux des vallées verdoyantes et des
          montagnes aux sommets enneigés, que les descendants des grands
          inventeurs ont maintenu l'héritage de la cité, préservant ses secrets
          mécaniques et mystiques avec zèle. Dans les ateliers enfumés, les
          horloges ancestrales battent au rythme des cœurs mécaniques, tandis
          que les locomotives rugissantes sillonnent les rails, tissant des
          liens entre les différentes contrées. Steamwick, bien plus qu'une
          simple ville, est le symbole d'une époque où le progrès et la
          tradition se mêlent, où chaque engrenage rouillé raconte une histoire,
          et où l'esprit d'innovation continue de brûler dans le cœur de ses
          habitants.
        </p>
      </section>
      <section className="home-description heiress-walk">
        <div className="description_2-contain">
          <p>
            Le parcours touristique de Steamwick offre une immersion captivante
            dans l'héritage riche et fascinant de la ville. En suivant ce
            parcours, vous découvrirez les monuments emblématiques, les lieux
            historiques et les secrets bien gardés qui ont façonné l'identité de
            Steamwick. De l'ancienne horlogerie mécanique à la majestueuse
            bibliothèque de vapeur, chaque étape de ce parcours vous plongera
            dans l'histoire et la culture uniques de la ville. C'est une
            expérience incontournable pour tous ceux qui souhaitent comprendre
            et apprécier pleinement l'héritage de Steamwick.
          </p>
        </div>
        <h2>Notre histoire</h2>
      </section>
      <section className="popular">
        <h3 className="popular-title">Les plus populaires</h3>
        <ArrowSlider
          length={arrowSliderList.length}
          list={arrowSliderList}
          size={5}
        />
      </section>
    </main>
  )
}

export default Home
