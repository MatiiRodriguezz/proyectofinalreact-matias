import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import navbar from './styles/navbar.scss'

const NavBar = () => {
  const menu = [
    {id: 1, categories: "Ir a Inicio"},
    {id: 2, categories: "Buscar juegos"},
    {id: 3, categories: "Comprar"},
  ];

  return ( 
  <div>
    <nav>
      <h1>Mati games</h1>
      {menu.map((nav, index) => {
        return (
          <a href="#" key={index}>
            {nav.categories}
          </a>
        );
      })}
    </nav>

        <CartWidget/>
  </div>
  );
}

export default NavBar;