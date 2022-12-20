import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Navbar/Navbar';
import Home from './Home/Home';
import Peliculas from './Peliculas/Peliculas';
import Contacto from './Contacto/Contacto';
import Detalle from './Detalle/Detalle';
function App() {
    const menu= [{
        name:'Inicio',
        href: '/'
    },
]
const categorias = [
    {
        name:'The Avengers',
        id:1
    },
    { name:'Avengers era de Ultron',
      id:2

    },
    { name: 'Avengers Infinity War',
      id:3

    },
    {
        name: 'Avengers Endgame',
        id:4
    },
    {
        name: 'Black Widow',
        id:5
    }
]

    return (
        <BrowserRouter className="App">
            <NavBar menus={menus} categorias={categorias} />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/category/:id' element={<Peliculas/>}/>
 
            </Routes>
        </BrowserRouter>
    );
}
export default App;
