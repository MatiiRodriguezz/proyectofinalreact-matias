import { Link } from "react-router-dom";

const Peliculas = ()=>{
    const peliculas = [
        {
            id:'1',
            nombre:' The Avengers'
        },
        {
            id:'2',
            name:'era de ultron'
        },
        {
            id:'3',
            name:'infinity war'
        }
    ]
    return (
        <div>
            <h1>Peliculas</h1>
            {
                Peliculas.map((Peñiculas)=>{
                    return <div><Link to={'./detallepelicula/${pelicula.id}/${pelicula.nombre}'}>{pelicula.nombre}</Link></div>
                })
            }
            <Link to='./detallepelicula/1243'><p>Pelicula en venta haz click</p>
            </Link>
        </div>
    )
}

export default Peliculas;