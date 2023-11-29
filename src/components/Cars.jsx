// Ecriture de "outlet", pour que les enfants soient affichés.
import { Outlet } from "react-router-dom";

// de nouveau, raccourci "sfc"
const Cars = () => {
    return ( 
        <>
        <h1>Liste des voitures</h1>
        <div>Voiture1</div>
        <div>Voiture2</div>
        <div>Voiture3</div>
        <div>Voiture4</div>
        <Outlet/>
        </>
     );
}
 
export default Cars;