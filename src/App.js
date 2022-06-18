import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';
import { CartContextProvider } from './context/cartContext';

function App() {

    // const cart = useContext(CartContext)
  

    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                <Route index path='/' element={<ItemListContainer saludo={'Bienvenidos/as!'} />} />
                <Route path='/categoria/:categoriaId' element={<ItemListContainer saludo={'Bienvenidos/as!'} />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Carrito />} />
                <Route path='*' element={<Navigate to='/' />} />
                
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
