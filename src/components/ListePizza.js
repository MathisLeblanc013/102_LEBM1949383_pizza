import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Tuile from "./Tuile.js"
import Nav from "./Nav.js"

function ListePizza({calculerPrixPanier, ajoutPanier, calculerPrixPizza, setListeCommandes, listePizza, panier, setPanier, panierOuvert, setPanierOuvert})
{
    
    return (
        <>
            <Nav calculerPrixPanier={calculerPrixPanier} calculerPrixPizza={calculerPrixPizza} setListeCommandes={setListeCommandes} isOnPizzaList={true} panier={panier} setPanier={setPanier} panierOuvert={panierOuvert} setPanierOuvert={setPanierOuvert}/>
            <h1 className='titreListe'>Liste des pizzas</h1>
            <div>
                <Outlet/>
            </div>
            <ul className='listPizza'>
                {listePizza.map((pizza, i)=>(
                    <Tuile ajoutPanier={ajoutPanier} key={pizza.name + pizza.ingredients} calculerPrixPizza={calculerPrixPizza} pizza={pizza} index={i}/>
                ))}
            </ul>
            <div className='centrer'>
                <Link className='pizzaCreerBtn' to={'/pizza/creer'}>
                        Créer une nouvelle pizza +
                </Link>
            </div>
        </>
    )
}

export default ListePizza;