import Nav from "./Nav.js"
import PizzaImage from "./PizzaImage.js"

const Commandes = ({calculerPrixPanier, calculerPrixPizza, listeCommandes, setListeCommandes, panier, setPanier, panierOuvert, setPanierOuvert}) => (
    <>
        <Nav calculerPrixPanier={calculerPrixPanier} calculerPrixPizza={calculerPrixPizza} setListeCommandes={setListeCommandes} isOnCommandes={true} panier={panier} setPanier={setPanier} panierOuvert={panierOuvert} setPanierOuvert={setPanierOuvert}/>
        <h1>Liste des commandes</h1>
        <ul className="listeCommandes">
            {listeCommandes.map((commande, i)=>(
                <li className="commande" key={commande + i}>
                    <p className="num">#{i + 1}</p>
                    <ul className="listePizzaCommandes">
                        {commande.map((pizza, i)=>(
                            <li className="pizzaCommande" key={pizza.nom + i}>
                                <p>{pizza.nb} x</p>
                                <div className='image_secondaire'>
                                    <PizzaImage pizza={pizza}/>
                                </div>
                                <p className="pizzaCommandeNom">{pizza.nom}</p>
                            </li>
                        ))}
                    </ul>
                    <p>= {calculerPrixPanier(commande)}.00$</p>
                </li>
            ))}
        </ul>
    </>
)

export default Commandes;