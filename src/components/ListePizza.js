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
                <Tuile key={pizza.name + pizza.ingredients} pizza={pizza} index={i}/>
            ))}
        </ul>
        <div className='centrer'>
            <Link className='pizzaCreerBtn' to={'/pizza/creer'}>
                    Créer une nouvelle pizza +
            </Link>
        </div>
    </>
)

export default ListePizza;