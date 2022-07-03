import React from 'react'

const ClientForm = ({ comprar, handleInputChange}) => {
    return (
        <form onSubmit={comprar}>
                <fieldset>
                    <legend>Indique sus datos</legend>
                    <input 
                    type='text'
                    placeholder='Nombre completo'
                    name='name'
                    onChange={handleInputChange}
                    />
                    <input 
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={handleInputChange}
                    />
                    <input 
                    type='tel'
                    placeholder='Telefono de contacto'
                    name='phone'
                    onChange={handleInputChange}
                    />
                    <input type='submit'/>
                </fieldset>
            </form>
    )
}

export default ClientForm