import { carIcon, planeIcon, trainIcon } from '../../assets/icon'
import Banner from '../../components/banner/banner'
import './about.scss'

function importAll(r) {
  return r.keys().map(r)
}
const images = importAll(
  require.context('../../assets/aboutSlider', false, /\.(webp)$/)
)

function About() {
  const aboutList = [
    {
      image: images,
      alt: 'Photo de la ville',
    },
  ]

  return (
    <main>
      <Banner title={'A propos'} list={aboutList} />

      <section className="about-history">
        <h2>Comprendre notre histoire </h2>
        <p>
          Il y a bien longtemps, au cœur d'une vallée entourée de montagnes
          brumeuses, se trouvait un petit village du nom de Steamwick. Les
          habitants de ce village étaient connus pour leur ingéniosité et leur
          passion pour les machines à vapeur. Chaque jour, les rues résonnaient
          du sifflement des locomotives et du cliquetis des engrenages.
          L'histoire de Steamwick remonte à la découverte d'une source naturelle
          de vapeur souterraine. Les villageois, sous la direction du célèbre
          inventeur nommé Éphraïm Steamwick, ont su exploiter cette ressource
          pour alimenter leurs machines. Bientôt, le village est devenu un
          centre d'innovation pour les technologies de la vapeur. La légende
          raconte que Steamwick a été fondée lorsque le premier explorateur, un
          certain Capitaine Alexander Brassgear, a découvert la source de vapeur
          en suivant les indications d'une ancienne carte. Cette carte, appelée
          "La Carte du Souffle Mécanique", était censée mener à une source de
          puissance inépuisable. Au fil des siècles, Steamwick est devenu une
          ville prospère, attirant les inventeurs, les scientifiques et les
          aventuriers du monde entier. Les rues étaient bordées d'ateliers où
          les artisans créaient des machines étonnantes, des locomotives
          surélevées aux automates musiciens. Mais derrière cette façade de
          prospérité, Steamwick cachait aussi ses mystères. On racontait que les
          tunnels souterrains, où passaient les tuyaux de vapeur, abritaient des
          créatures mécaniques oubliées. Certains disaient même que les ombres
          des anciens inventeurs hantaient encore les ruelles sombres la nuit.
          Aujourd'hui, Steamwick est devenue une destination touristique prisée,
          attirant les curieux du monde entier. Les visiteurs peuvent explorer
          les musées de la vapeur, assister à des démonstrations d'engins
          anciens et déguster les délices de la cuisine à la vapeur. Mais malgré
          sa modernisation, la ville n'a jamais perdu son charme vintage et son
          atmosphère mystérieuse. Ainsi va l'histoire de Steamwick, une ville où
          le passé mécanique se mêle au présent, et où chaque sifflement de
          locomotive rappelle les jours glorieux de l'ère de la vapeur.
        </p>
      </section>

      <section className="about-heiress">
        <h2>Notre histoire</h2>
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

      <section className="about-facts">
        <h2>Quelque Anecdotes</h2>
        <ul>
          <li>
            L'Étrange Phénomène des Horloges Synchronisées : <br /> Les
            habitants de Steamwick ont longtemps remarqué un phénomène étrange :
            toutes les horloges de la ville se synchronisent mystérieusement à
            minuit chaque nuit. Certains disent que c'est l'œuvre d'un ancien
            horloger fantôme qui hante encore les tours de l'horloge, tandis que
            d'autres prétendent qu'il s'agit d'une manifestation de la magie de
            la vapeur qui régit la ville.
          </li>
          <li>
            La Légende de la Locomotive Fantôme : <br /> On raconte qu'une
            vieille locomotive à vapeur, nommée "Le Spectre de Steamwick",
            parcourt encore les rails abandonnés la nuit. Les rares témoins
            affirment avoir entendu son sifflement lugubre et vu ses feux
            fantomatiques briller dans l'obscurité. Certains aventuriers
            intrépides tentent de la retrouver pour percer son mystère, mais
            personne n'a jamais réussi à la capturer.
          </li>
          <li>
            Le Concours de Machines à Vapeur : <br /> Chaque année, Steamwick
            organise un concours de machines à vapeur où les inventeurs locaux
            rivalisent de créativité pour construire les machines les plus
            impressionnantes. Des locomotives surélevées aux machines à laver
            automatiques, tout est permis. Le gagnant remporte le prestigieux
            trophée de la "Clé d'Or", symbole de l'excellence en ingénierie à
            vapeur.
          </li>
          <li>
            Les Jardins de la Vapeur : <br /> Nichés au cœur de la ville, les
            Jardins de la Vapeur sont un havre de verdure où les habitants
            peuvent se détendre parmi les sculptures de métal à vapeur et les
            fontaines d'eau chauffée par la chaleur des machines. Ces jardins
            sont réputés pour leurs plantes exotiques qui prospèrent grâce à un
            système de serres alimenté par la vapeur souterraine de la ville.
          </li>
          <li>
            Le Mystère de la Machine Disparue : <br /> Un jour, une machine à
            vapeur extrêmement puissante, surnommée "La Foudre de Steamwick", a
            mystérieusement disparu de l'atelier de son inventeur. Depuis lors,
            les habitants de la ville ont souvent entendu son sifflement
            lointain dans les montagnes environnantes, comme si elle tentait de
            retrouver son chemin. Certains pensent qu'elle s'est transformée en
            une créature mécanique errante, tandis que d'autres croient qu'elle
            a trouvé refuge dans une caverne secrète, attendant d'être
            découverte par un aventurier courageux.
          </li>
        </ul>
      </section>

      <section className="about-transport">
        <h2>Comment rejoindre notre ville :</h2>
        <div className="transport">
            <div className="transport-icon">
                {carIcon}
            </div>
          
          <p>
            Par la route : <br />
            Pour les voyageurs venant en voiture, Steamwick est accessible par
            plusieurs routes pittoresques qui serpentent à travers les collines
            verdoyantes et les forêts mystérieuses de la région. Les panneaux
            indicateurs bien entretenus bordent les routes principales, guidant
            les conducteurs vers la ville. Une fois arrivés, ils peuvent se
            garer dans l'un des nombreux parkings situés à proximité du
            centre-ville, offrant un accès facile aux attractions et aux
            quartiers historiques de Steamwick.
          </p>
        </div>
        <div className="transport">
            <div className="transport-icon">
                {trainIcon}
            </div>
          
          <p>
            Par le train: <br />
            Pour rejoindre la ville de Steamwick en train, il existe une ligne
            ferroviaire spéciale qui relie la ville à d'autres destinations
            majeures de la région. La gare de Steamwick est un magnifique
            bâtiment de style victorien, orné de grandes fenêtres en verre et de
            lourdes portes en bois sculpté. Les voyageurs peuvent monter à bord
            du "Steam Express", un train à vapeur élégant et confortable qui
            offre une vue pittoresque sur la campagne environnante tout en se
            dirigeant vers la gare centrale de Steamwick.
          </p>
        </div>
        <div className="transport">
            <div className="transport-icon">
                {planeIcon}
            </div>
          
          <p>
            Par avion : <br />
            Pour ceux qui préfèrent voyager en avion, l'aéroport le plus proche
            de Steamwick est l'aéroport international de Cielombre, situé à
            environ une heure de route de la ville. De là, les voyageurs peuvent
            prendre un taxi ou louer une voiture pour se rendre à Steamwick.
            Certains visiteurs optent également pour des vols charters
            directement vers l'aérodrome de Steamwick, réservant une expérience
            aérienne unique et spectaculaire en survolant les majestueuses
            montagnes et les vallées en route vers la ville.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
