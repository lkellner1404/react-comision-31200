
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import img from './shopping-cart.png'
import './style.css'

export default function CartWidget() {

    const { cant } = useCartContext()

    if (cant === 0){
        return(
            <section className='cartwidget'>
            <Link to='/cart'>
                <img src={img} alt="cart"/>
            </Link>
        </section>
        )
    }

    return(
        <section className='cartwidget'>
            <Link to='/cart'>
                <img src={img} alt="cart"/>
                <section className='cantidad'>
                    <span className='cuenta'>{cant}</span>
                </section>
            </Link>
        </section>
    )
}
