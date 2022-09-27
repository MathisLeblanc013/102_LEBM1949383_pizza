import {useLoaderData} from "react-router-dom";
import PizzaImage from "./PizzaImage";

function PizzaInfos() {

    const pizza = useLoaderData();

    return(
        <div className='pizza_principale'>
            <div className='image_principale_infos'>
                <PizzaImage pizza={pizza}/>
            </div>
            <div className='info'>
                <h2>{pizza.nom}</h2>
                <ul>
                    {pizza.ingredients.map((ingredient, i)=>(
                        <li key={ingredient.nom}>{ingredient.nom}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PizzaInfos;