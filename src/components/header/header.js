import './style.css'
import logo from './../../images/logo.png'
import cart from './../../images/cart.svg'
import search from './../../images/search.svg'
import user from './../../images/user.svg'
import menu from './../../images/menu.svg'

export default function CreateHeader() {

    function getSizeOfCart() {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : "0"
        return cart;
    }

    return (
        <header className="header w-100">
            <nav className="header-container center w-100 h-100">
                <div className="logo-container">
                    <a href="">
                        <img src={logo} alt="" width="200" />
                    </a>
                </div>
                <div className="info-container w-100 h-100">
                    <div className="menu-mobile">
                        <img src={menu} alt="" width="30" />
                    </div>
                    <div className="search-bar-container center h-100">
                        <form action="" className="search-bar w-100">
                            <input type="text" className="w-100" placeholder="O que está procurando?" />
                        </form>
                        <img src={search} className="search-icon" alt="" width="30" />
                    </div>
                    <div className="my-account">
                        <a href="" className="my-account-container">
                            <img src={user} alt="" width="30" />
                            <p>Minha Conta</p>
                        </a>
                    </div>
                    <div className="cart-container">
                        <img src={cart} alt="" width="30" />
                        <div className="cart-count">{getSizeOfCart()}</div>
                    </div>
                </div>
            </nav>
        </header>
    );
}