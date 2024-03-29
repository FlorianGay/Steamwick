import './contact.scss'

function Contact() {
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

            <button>Envoyée</button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Contact
