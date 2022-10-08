import PizzaImage from "./PizzaImage.js"
import { useNavigate } from 'react-router-dom';

function Panier({calculerPrixPanier, calculerPrixPizza, setListeCommandes, panier, setPanier}) {

    const navigate = useNavigate();

    const commander = () => {
        panier.prix = calculerPrixPanier;
        setListeCommandes(previous => ([panier, ...previous]));
        reset();
        navigate(`/commande`);
      }
    
      const reset = () => {
          setPanier([]);
        //   setPrixPanier(0);
      }

    return (
        <div>
            <h2>Panier</h2>
            <ul className="listePanier">
                {panier.map((pizza, i)=>(
                    <li key={pizza.nom} className="elementPanier">
                        <p>{pizza.nb} x</p>
                        {/* <div className='imagePanier'>
                            <PizzaImage pizza={pizza}/>
                        </div> */}
                        <p>{pizza.nom}</p>
                        <p>= {calculerPrixPizza(pizza.ingredients) * pizza.nb}.00$</p>
                    </li>
                ))}
                <li className="elementPanier total">
                    <p>Total</p>
                    <p>= {calculerPrixPanier(panier)}.00$</p>
                </li>
            </ul>
            <div className="divBtn">
                <button className="btn" disabled={(panier.length === 0)} onClick={commander}>Commander</button>
            </div>
        </div>
    )
}

export default Panier;