
import img from './shopping-cart.png'
import './style.css'

export default function CartWidget() {
    return(
        <section className='cartwidget'>
            <img src={img} alt="cart"/>
        </section>
    )
}
