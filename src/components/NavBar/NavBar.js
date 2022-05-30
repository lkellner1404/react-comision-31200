
import CartWidget from '../CartWidget/CartWidget'
import logo from './logo.png'
import './style.css'


export default function NavBar(){
    return (
        <header id='top'>
            <a className="brand" href="#top"><img src={logo} alt="LOGO"></img></a>
            <section className="search">
                <input type="text" placeholder="Buscar..."></input>
                <button>Buscar</button>
            </section>
            <nav>
                <ul className="nav">
                    <li><button>PRODUCTOS</button></li>
                    <li><button>QUIENES SOMOS</button></li>
                    <li><button>CONTACTO</button></li>
                </ul>
            </nav>            
            <CartWidget />
        </header>

    )
}