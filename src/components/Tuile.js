import PizzaImage from "./PizzaImage.js"
import {Link} from 'react-router-dom';

const Tuile = ({ajoutPanier, pizza, index, calculerPrixPizza}) => (
    <li key={index} className='pizza' data-testid='pizzaSaved'>
        <Link to={`/pizza/${index + 1}`}>
            <h3>{pizza.nom}</h3>
            <div className='image_secondaire'>
                <PizzaImage pizza={pizza}/>
            </div>
            <p className="prixTuile">Prix : {calculerPrixPizza(pizza.ingredients)}.00$</p>
            <div className='btnInfosPizza tuilebtn'>
                <button onClick={(e)=>ajoutPanier(pizza)} className='btnAjoutPanier'>Ajouter au panier</button>
            </div>
        </Link>
    </li>
);


export default Tuile;