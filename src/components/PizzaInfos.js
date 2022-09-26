import {useLoaderData} from "react-router-dom";

function PizzaInfos() {

    const pizza = useLoaderData();

    return(
        <div className='pizza_principale'>
            <div className='image_principale_infos'>
                <img src="/img/pain.png" alt="pain"/>
                {pizza.ingredients.map((ingredient, i)=>(
                    <img key={ingredient.nom} src={`/${ingredient.url}`} alt={ingredient.nom}/>
                    ))}
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