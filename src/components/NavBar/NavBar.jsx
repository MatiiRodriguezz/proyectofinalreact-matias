import { Link } from 'react-router-dom';

const NavBar = ({Avengers, peliculas}) =>{
    return(

    <div className='navbar'>
      {
        menus.map((menu)=>{
          return <Link className='navbar__menu' to=
          {menu.href} >{menu.name}</Link>
        })
      }
      {
        categorias.map((categoria)=>{
          return <Link to={`/category/${categoria.id}`}>
          {categoria.name}</Link>
        })
      }
  </div>)
}

export default NavBar;