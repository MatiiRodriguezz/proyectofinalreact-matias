import { Link } from 'react-router-dom';


const NavBar = () =>{
  const navList = [
    {name:'Tienda Online', href: '/'},
    {name: 'contancto', href: '/contacto'},
    {name: 'Medios de Pago', href: '/mediosdepago'}
  ]
    
  
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
          return <Link to={`/category/${categoria.id}`}
          className='navbar__menu'>{categoria.name}</Link>
        })
      }
  </div>)
}

export default NavBar;