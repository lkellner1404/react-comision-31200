import React, { useEffect } from 'react'
import './style.css'

const ClientForm = ({ buy, handleInputChange, setConfirmation, confirmation }) => {

    useEffect(() => {
        setConfirmation(document.getElementById('email').value===document.getElementById('confEmail').value)
    }, [handleInputChange])
    

    return (
        <form onSubmit={buy} className='cart-form' >
            <fieldset>
                <legend>Indique sus datos</legend>
                <input 
                type='text'
                placeholder='Nombre completo'
                name='name'
                required 
                onChange={handleInputChange}
                />
                <input 
                type='email'
                placeholder='Email'
                name='email'
                id='email'
                required 
                onChange={handleInputChange}
                />
                <input 
                type='email'
                placeholder='Confirmar Email'
                id='confEmail'
                name='confEmail'
                required 
                onChange={handleInputChange}
                />
                    {
                        !confirmation && <span id='incorrectEmail'>Deben coincidir los emails</span>
                    }
                <input 
                type='tel'
                placeholder='Telefono de contacto'
                name='phone'
                required 
                pattern='[0]{1}[0-9]{10}'
                maxLength='11'
                title='0XXXXXXXXXX'
                onChange={handleInputChange}
                />
                <input type='submit'/>
            </fieldset>
        </form>
    )
}

export default ClientForm