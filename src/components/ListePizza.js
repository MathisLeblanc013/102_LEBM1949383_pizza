import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Tuile from "./Tuile.js"

const ListePizza = ({listePizza}) => (
    <>
        <h1 className='titreListe'>Liste Pizza</h1>
        <div>
            <Outlet/>
        </div>
        <ul className='listPizza'>
            {listePizza.map((pizza, i)=>(
                <Tuile pizza={pizza} index={i}/>
            ))}
            <li className='pizza'>
                <Link to={'/pizza/creer'}>
                    <h3>Créer une nouvelle pizza</h3>
                    <div className='image_secondaire'>
                        <img src="/img/pizza_+.png" alt="pain"/>
                    </div>
                </Link>
            </li>
        </ul>
    </>
)

export default ListePizza;