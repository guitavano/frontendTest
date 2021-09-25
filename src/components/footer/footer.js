import './style.css'
import contact from './../../images/contact.svg'
import help from './../../images/help.svg'
import logoWhite from './../../images/logo-white.svg'
import logoVtex from './../../images/vtex.svg'

export default function CreateHeader() {
    return (
        <footer className="center">
            <div className="footer-container">
                <section className="address">
                    <h3>Localização</h3>
                    <div className="white-line"></div>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </section>
                <section className="contact">
                    <button>
                        <img src={contact} alt="Entre em contato conosco - Corebiz" />
                        <p>ENTRE EM CONTATO</p>
                    </button>
                    <button>
                        <img src={help} alt="Fale com o nosso consultor - Corebiz" />
                        <p>FALE COM O NOSSO <br></br> CONSULTOR ONLINE</p>
                    </button>
                </section>
                <section className="creators">
                    <div>
                        <p>Created by</p>
                        <a href=""><img src={logoWhite} alt="Logotipo Corebiz" width="120px" height="40px" /></a>
                    </div>
                    <div>
                        <p>Powered by</p>
                        <a href="https://vtex.com/br-pt/" target="_blank"><img src={logoVtex} alt="Logotipo VTEX" width="80px" height="40px" /></a>
                    </div>
                </section>
            </div>
        </footer>
    );
}