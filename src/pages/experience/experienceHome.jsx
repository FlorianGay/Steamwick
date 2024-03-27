import './experienceHome.scss'
import artExperience from '../../assets/art_experience.webp'
import festivalExperience from '../../assets/festivals_experience.webp'
import foodExperience from '../../assets/food_experience.webp'
import natureExperience from '../../assets/nature_experience.webp'
import marketExperience from '../../assets/market_experience.webp'
import { Link } from 'react-router-dom'

function ExperienceHome() {
  const experienceList = [
    {
      image: artExperience,
      title: 'Art & Fabrication',
      description:
        "Découvrez l'essence même de Steamwick à travers son art et sa fabrication. Des artisans talentueux façonnent des œuvres steampunk uniques, mêlant ingéniosité et esthétique. Explorez des ateliers où les métaux se transforment en sculptures mécaniques et où la créativité rencontre la technologie. Plongez dans un univers où chaque création raconte une histoire, où l'art et l'ingénierie se marient pour donner vie à des chefs-d'œuvre steampunk.",
      category: 'art',
    },
    {
      image: festivalExperience,
      title: 'Evenements & Festivals',
      description:
        "Steamwick vibre au rythme de ses événements et festivals steampunk. De spectaculaires parades mécaniques défilent dans les rues, des concerts d'engrenages résonnent sous les voûtes métalliques et des expositions d'inventions extraordinaires captivent les visiteurs. Ne manquez pas l'occasion de participer à des soirées costumées extravagantes, où l'époque victorienne se mêle au futur rétro-futuriste. Venez célébrer la créativité et l'ingéniosité lors de ces rendez-vous uniques au cœur de Steamwick.",
      category: 'festival',
    },
    {
      image: foodExperience,
      title: 'Nourriture',
      description:
        "Explorez les délices culinaires steampunk dans les tavernes et restaurants de Steamwick. Des plats inspirés de l'époque victorienne, revisités avec une touche de modernité et d'ingéniosité, vous attendent. Dégustez des mets élaborés avec des ingrédients locaux et des recettes traditionnelles, sublimés par des inventions culinaires audacieuses. Que vous soyez amateur de plats roboratifs ou de petites gourmandises mécanisées, Steamwick saura combler toutes vos envies gastronomiques.",
      category: 'food',
    },
    {
      image: natureExperience,
      title: 'Nature',
      description:
        "Découvrez la nature steampunk qui entoure Steamwick. Parcs luxuriants où les plantes mécaniques côtoient les fleurs vivantes, jardins d'engrenages où les arbres métalliques s'élèvent vers le ciel. Explorez des sentiers balisés qui vous mèneront à travers des paysages étonnants, où la technologie et la nature se fondent harmonieusement. Profitez des panoramas spectaculaires depuis les observatoires mécaniques, où chaque point de vue est une invitation à l'émerveillement.",
      category: 'parc',
    },
    {
      image: marketExperience,
      title: 'Marchés',
      description:
        "Plongez dans l'effervescence des marchés steampunk de Steamwick. Des lieux vibrants où se mêlent les odeurs envoûtantes des épices exotiques, le cliquetis des engrenages et les éclats de rire des visiteurs. Explorez des étals colorés où artisans et commerçants présentent leurs créations uniques : bijoux mécaniques, vêtements rétro-futuristes, gadgets ingénieux et bien plus encore. Chaque marché est une invitation à la découverte et à l'émerveillement, où l'extraordinaire devient accessible à tous.",
      category: 'market',
    },
  ]


  console.log(experienceList)
  return (
    <main className="experience-home">
      <h1>Expériences</h1>
      <div className="experience-contain">
        {experienceList.map((list, index) => (
            <Link key={index}>
            <figure>
            <img src={list.image} alt={list.title} />
            <figcaption className={index%2 === 0 ? '' : 'reverse'}>
              <h2>{list.title}</h2>
              <p>{list.description}</p>
            </figcaption>
          </figure>
            </Link>
          
        ))}
      </div>
    </main>
  )
}

export default ExperienceHome
