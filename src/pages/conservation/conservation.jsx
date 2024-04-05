import manorImg from '../../assets/conservation_manoir_horloge.webp'
import usineImg from '../../assets/conservation_usine.webp'
import './conservation.scss'

function Conservation() {
  return (
    <main className="conservation">
      <h1>Conservation</h1>
      <section >
        <h2>Manoir des Horloges</h2>
        <figure >
          <img src={manorImg} alt="Photo de la réstauration d'un manoir" />
          <figcaption>
            <h3>Initiative du projet</h3>
            <p>
              Le Manoir des Horloges est un projet de restauration ambitieux
              visant à préserver et restaurer l'un des bâtiments historiques les
              plus emblématiques de Steamwick. Ce manoir, autrefois la demeure
              d'une famille influente de l'époque victorienne, a été le témoin
              de nombreuses soirées élégantes et de réceptions prestigieuses.
              Malheureusement, au fil des ans, le manoir a souffert de l'usure
              du temps, avec des parties de sa structure nécessitant une
              rénovation urgente. L'initiative de restauration vise à redonner
              au Manoir des Horloges sa splendeur d'antan, tout en préservant
              son histoire et son importance dans le tissu social de Steamwick.
            </p>

            <h3>Fonction du lieu</h3>
            <p>
              Une fois restauré, le Manoir des Horloges retrouvera sa fonction
              d'origine en tant que lieu de rassemblement élégant pour les
              événements culturels et sociaux de la ville. Il accueillera à
              nouveau des réceptions, des galas de charité, des bals masqués et
              d'autres événements spéciaux. Le manoir sera également ouvert au
              public pour des visites guidées, offrant aux habitants et aux
              visiteurs un aperçu de l'histoire fascinante de Steamwick à
              travers les salons magnifiquement restaurés, les salles de bal
              impressionnantes et les jardins pittoresques. Cet espace restauré
              sera non seulement un joyau architectural, mais aussi un lieu
              vibrant de la vie culturelle de la ville.
            </p>
          </figcaption>
        </figure>
      </section>

      <section >
        <h2>Ancienne usine à vapeur</h2>
        <figure>
          <img
            src={usineImg}
            alt="Photo de la réstauration d'une usine désaffectée"
          />
          <figcaption>
            <div className="initiative">
              <h3>Initiative du projet</h3>
              <p>
                L'Ancienne Usine à Vapeur est un projet de restauration novateur
                visant à transformer une structure industrielle désaffectée en
                un centre culturel et éducatif dédié à l'histoire de la vapeur
                et de l'industrie steampunk. Cette usine, qui a autrefois
                alimenté les machines et locomotives de la ville, a été laissée
                à l'abandon pendant des décennies. L'initiative de restauration
                a été lancée par un groupe de passionnés de l'histoire
                industrielle de Steamwick, qui ont vu en cette usine un
                potentiel de préservation de l'histoire locale tout en créant un
                espace dynamique pour la communauté.{' '}
              </p>
            </div>
            <div className="function">
              <h3>Fonction du lieu</h3>
              <p>
                Une fois restaurée, l'Ancienne Usine à Vapeur deviendra un
                centre culturel interactif où les visiteurs pourront découvrir
                les merveilles de l'époque de la vapeur et de l'industrie
                steampunk. Le bâtiment abritera des expositions interactives sur
                l'évolution des technologies à vapeur, des ateliers de
                construction de machines à vapeur pour les jeunes ingénieurs en
                herbe, et même un théâtre en plein air pour des représentations
                théâtrales steampunk. De plus, des artisans locaux auront
                l'opportunité de louer des espaces d'atelier pour créer et
                vendre leurs propres créations steampunk. L'Ancienne Usine à
                Vapeur deviendra ainsi un carrefour d'éducation, de culture et
                de créativité dans la ville de Steamwick, préservant son
                héritage industriel tout en l'adaptant aux besoins et aux
                intérêts contemporains.{' '}
              </p>
            </div>
          </figcaption>
        </figure>
      </section>
    </main>
  )
}

export default Conservation
