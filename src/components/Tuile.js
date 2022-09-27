import PizzaImage from "./PizzaImage.js"
import {Link} from 'react-router-dom';

const Tuile = ({pizza, index}) => (
    <li key={index} className='pizza' data-testid='pizzaSaved'>
        <Link to={`/pizza/${index + 1}`}>
            <h3>{pizza.nom}</h3>
            <div className='image_secondaire'>
                <PizzaImage pizza={pizza}/>
            </div>
        </Link>
    </li>
);


export default Tuile;