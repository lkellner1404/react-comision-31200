
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from './logo.png'
import './style.css'


export default function NavBar(){
    return (
        <header id='top'>
            <Link to='/'>
                <img src={logo} alt="LOGO"></img>
            </Link>
            <section className="search">
                <input type="text" placeholder="Buscar..."></input>
                <button>Buscar</button>
            </section>
            <nav>
                <ul className="nav">
                    <Link to='/categoria/clasicos'>
                        <li><button>CLASICOS</button></li>
                    </Link>
                    <Link to='/categoria/frutales'>
                        <li><button>FRUTALES</button></li>
                    </Link>
                    <Link to='/categoria/gourmet'>
                        <li><button>GOURMET</button></li>
                    </Link>
                </ul>
            </nav>            
            <CartWidget />
        </header>

    )
}