import { Link } from 'react-router-dom'
import Banner from '../../components/banner/banner'
import homeList from '../../data/homeSlider.json'
import './home.scss'
import ArrowSlider from '../../components/visitSlider/arrowSlider'
import arrowSliderList from '../../data/places.json'

function Home() {
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
      <section className="home-description history">
        <div className="description_2-contain">
          <p>
            Située aux confins des terres mystérieuses et des montagnes
            brumeuses, Steamwick se dresse comme un phare d'innovation et de
            mystère dans le royaume. Fondée il y a des siècles par les
            visionnaires de l'époque, cette cité prospère est le fruit d'une
            alliance unique entre la magie antique et les technologies
            mécaniques. Ses rues pavées de laiton résonnent encore des échos du
            passé, où les premiers ingénieurs ont forgé les premières
            locomotives à vapeur et les horloges précises...
          </p>
          <Link to={''}>En savoir plus</Link>
        </div>
        <h2>Notre histoire</h2>
      </section>
      <section className='popular'>
        <h3 className='popular-title'>Les plus populaires</h3>
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
