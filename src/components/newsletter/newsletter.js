import './style.css'
import axios from 'axios';

export default function CreateNewsletter() {

    function cadastraLead(e) {
        e.preventDefault()
        console.log("teste")
        let name = document.getElementById("name-input").value
        let email = document.getElementById("email-input").value
    }

    return (
        <section className="newsletter w-100">
            <div className="newsletter-container">
                <h2>Participe de nossas news com promoções e novidades!</h2>
                <form onSubmit={cadastraLead}>
                    <input placeholder="Digite seu nome" type="text" required="required" id="name-input" />
                    <input placeholder="Digite seu email" type="email" required="required" id="email-input" />
                    <input className="button-submit" type="submit" value="Eu quero!" />
                </form>
            </div>
        </section>
    );
}