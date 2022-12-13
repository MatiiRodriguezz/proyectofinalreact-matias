import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  NavBar from './Navbar/Navbar';
import Inicio from './Inicio/Inicio'
import Peliculas from './Peliculas/Peliculas'
import Contacto from './Contacto/Contacto';
import Detalle from './Detalle/Detalle'
function App() {
  const menus = [{
    name: 'Inicio',
    href: '/'
  },
  {
    name: 'Peliculas',
    href: '/Peliculas'
  }, 
  
]
  return (
    <BrowserRouter className='App'>
     <NavBar menus={menus} />
     <Routes>
      <Route exact path='/' element={<Inicio />}/>
      <Route exact path='/Peliculas' element={<Peliculas />}/>
      <Route exact path='/Contacto' element={<Contacto />}/>
      <Route exact path='/Detallepelicula/:idpelicula/:nombre' element={<Detalle/>}/>
     </Routes>
    </BrowserRouter> 
  );
}

export default App;
