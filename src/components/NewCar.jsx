import { Outlet } from "react-router-dom";

const NewCar = () => {
    return ( 
        <>
            <h1>Création d'une nouvelle voiture</h1>
            <Outlet />
        </>
     );
}
 
export default NewCar;