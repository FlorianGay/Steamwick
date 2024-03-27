import './place.scss'
import compassIcon from '../../assets/compass_icon.webp'
import historicalImg from '../../assets/historical.webp'
import templeImg from '../../assets/temple.webp'
import parkImg from '../../assets/park.webp'
import schoolImg from '../../assets/school.webp'

function PlaceToVisit() {

    const bannerList = [
        {
            image: historicalImg,
            alt: "Photo d'un lieu historique de Steamwick",
            title: "Historique",
            category: "historique"
        },
        {
            image: templeImg,
            alt: "Photo d'un temple de Steamwick",
            title: "Religieux & Culturel",
            category: "culturel"

        },
        {
            image: parkImg,
            alt: "Photo d'un parc de Steamwick",
            title: "Parc",

            category: "parc"

        },
        {
            image: schoolImg,
            alt: "Photo d'une école de Steamwick",
            title: "Educatif",

            category: "educatif"

        }
    ]

    return (
        <main>
            <article className='place-title'>
                <h1>Endroit à visiter</h1>
            </article>
            <section className='place-banner'>
                <img src={compassIcon} alt="représentation d'une rose des vents " className='banner-compass'/>
                <article>
                    {bannerList.map((list) => (
                        <div className="banner-elmt" key={list.category}>
                        <img src={list.image} alt={list.alt} />
                        <p>{list.title}</p>
                    </div>
                    ))}
                    
                </article>
            </section>
        </main>
    )
}

export default PlaceToVisit