import { useParams } from "react-router";

// de nouveau, raccourci "sfc"
const Marque= () => {
    let { name } = useParams()
    return ( 
        <h1>Marque {name}</h1>
     );
}
 
export default Marque;