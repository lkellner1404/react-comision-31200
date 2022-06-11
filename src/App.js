import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
