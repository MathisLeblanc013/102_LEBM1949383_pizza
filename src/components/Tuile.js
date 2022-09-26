import {Link} from 'react-router-dom';

const Tuile = ({pizza, index}) => (
    <li key={index} className='pizza' data-testid='pizzaSaved'>
        <Link to={`/pizza/${index + 1}`}>
            <h3>{pizza.nom}</h3>
            <div className='image_secondaire'>
            <img src="/img/pain.png" alt="pain"/>
            {pizza.ingredients.map((ingredient, i)=>(
                <img key={ingredient.nom} src={`/${ingredient.url}`} alt={ingredient.nom}/>
                ))}
            </div>
            {/* <div className='info'>
                <ul>
                    {pizza.ingredients.map((ingredient, i)=>(
                        <li key={ingredient.nom}>{ingredient.nom}</li>
                    ))}
                </ul>
            </div> */}
        </Link>
    </li>
);


export default Tuile;