import {useLoaderData} from "react-router-dom";
import {useParams} from "react-router-dom";
import ListePizza from "./ListePizza";
import PizzaImage from "./PizzaImage";
import Panier from "./Panier";
import { useNavigate } from 'react-router-dom';

function PizzaInfos({calculerPrixPizza, ajoutPanier, listePizza}) {

    // const pizza = useLoaderData();
    const pizza = listePizza[useParams().pizzaId - 1]

    const navigate = useNavigate();
    if(pizza === undefined) {
        navigate(`/pizza`);
    }

    return(
        <>
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
                    <p>Prix: {calculerPrixPizza(pizza.ingredients)}.00$</p>
                    <div className='btnInfosPizza'>
                        <button onClick={(e)=>ajoutPanier(pizza)} className='btnAjoutPanier'>Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PizzaInfos;