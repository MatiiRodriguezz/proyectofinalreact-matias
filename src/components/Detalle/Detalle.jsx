import { useEffect } from "react";
import { useParams } from "react-router-dom"

const Detalle  = () =>{
    const {idpelicula, nombre} = useParams(); 
    return(
        <div>
            <h1>Detalle de la pelicula {nombre} con id {idpelicula} </h1>
            <img width={100} height={100} src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2b/The_Avengers_Poster.png/revision/latest?cb=20150610135853&path-prefix=es" />
            <h3>Detalle de la pelicula</h3>
        </div>
    )
}
export default Detalle 