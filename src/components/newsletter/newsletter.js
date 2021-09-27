import './style.css'
import axios from 'axios';

export default function CreateNewsletter() {

    function clearNewsletter() {
        if (document.querySelector('.newsletter-successful')) {
            document.querySelector('.newsletter-successful').style.display = "none"
        }
    }

    clearNewsletter()

    function cadastraLead(e) {
        e.preventDefault()
        console.log("teste")
        let name = document.getElementById("name-input").value
        let email = document.getElementById("email-input").value

        var data = { name: name, "email": email };

        var config = {
            method: 'post',
            url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
            headers: {},
            data: data
        };

        axios(config)
            .then(function (response) {
                document.querySelector('.newsletter-container').style.display = "none"
                document.querySelector('.newsletter-successful').style.display = "block"
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function newRegister() {
        document.querySelector('.newsletter-successful').style.display = "none"
        document.querySelector('.newsletter-container').style.display = "block"
        document.getElementById('name-input').value = ""
        document.getElementById('email-input').value = ""
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
            <div className="newsletter-successful">
                <h2>Seu e-mail foi cadastrado com sucesso!</h2>
                <h3>A partir de agora você receberá as novidades e ofertas exclusivas.</h3>
                <button className="button-new-register" onClick={newRegister}>Cadastrar novo e-mail</button>
            </div>
        </section>
    );
}