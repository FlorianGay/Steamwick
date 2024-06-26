import { useState } from 'react'
import './contact.scss'

function Contact() {
  const [classname, setClassname] = useState('invisible')

  function validation(e) {
    e.preventDefault() // Empêcher le comportement par défaut du formulaire

    const form = e.target.closest('form')
    if (form.checkValidity()) {
      setClassname('validation')
      setTimeout(() => {
        setClassname('invisible')
      }, 3000)
    } else {
      form.reportValidity()
    }
  }
  return (
    <main className="contact">
      <h1>Contact</h1>
      <section>
        <article>
          <h2>Steamwick</h2>
          <p>La citée héritière du royaume</p>
        </article>
        <span></span>
        <article>
          <form className="contact-form">
            <label htmlFor="name">Nom et prénom</label>
            <input type="text" id="name" name="nom et prénom" required></input>

            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              name="adresse e-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></input>

            <label htmlFor="number">Numéro de téléphone</label>
            <input type="tel" id="number" name="numéro de téléphone"></input>

            <label htmlFor="message">Votre message :</label>
            <textarea
              type="text"
              id="message"
              name="message"
              required
            ></textarea>

            <button type="submit" onClick={validation}>
              Envoyer
            </button>
          </form>
        </article>
      </section>
      <p className={classname}>Votre message a bien était envoyer !</p>
    </main>
  )
}

export default Contact
