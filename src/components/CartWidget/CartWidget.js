
import { Link } from 'react-router-dom'
import img from './shopping-cart.png'
import './style.css'

export default function CartWidget() {
    return(
        <section className='cartwidget'>
            <Link to='/cart'>
                <img src={img} alt="cart"/>
            </Link>
        </section>
    )
}
