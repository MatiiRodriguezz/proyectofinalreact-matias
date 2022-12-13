import './NavBar.css';

 const NavBar = ({menus}) => {
  return(

  <div className='NavBar'>
    {
      menus.map((menu)=>{
        return <a className='navbar__menu' href={menu.href}>{menu.name}</a>
      }
      )
    }


  </div>)
}

export default NavBar;