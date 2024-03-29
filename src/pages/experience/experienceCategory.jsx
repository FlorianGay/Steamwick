import { Link, useLocation } from 'react-router-dom'
import experienceList from '../../data/experiences.json'
import { arrowLeft } from '../../assets/icon'
import './experienceCategory.scss'

function ExperienceCategory() {
  const location = useLocation()
  const locationCategory = location.pathname.split('/').at(-1)
  const experienceFiltered = experienceList[locationCategory]
  console.log(experienceFiltered)
  return (
    <main>
      <section className="experience-banner">
        <img src={experienceFiltered.image} alt={experienceFiltered.title} />
        <Link to={'/experience'} className='experience-nav'>
          <button>{arrowLeft}</button>
        </Link>
        <h1>{experienceFiltered.title}</h1>
      </section>
      <section className="experience-card-list">
        {experienceFiltered.experiences.map((list, index) => (
          <div className={`experience-card ${index % 2 === 0 ? 'row' : 'row-reverse'}`} key={index}>
            <img src={list.image} alt={list.titre} />
            <div className="card-contain">
              <h2>{list.titre}</h2>
              <p>{list.description}</p>
              <ul>
                Quelques adresses intéressantes : 
                {list.adresse.map((list, index) => (
                  <li key={index}> {list} </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default ExperienceCategory
