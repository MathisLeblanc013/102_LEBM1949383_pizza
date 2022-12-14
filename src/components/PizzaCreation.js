import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Pizza.css';
import Nav from "./Nav.js"

function Pizza({calculerPrixPanier, calculerPrixPizza, setListeCommandes, setListePizza, setPanier, panier, panierOuvert, setPanierOuvert}) {

  const [nom, setNom] = useState("");

  const [ingredients, setIngredients] = useState([
    {nom: "sauce tomate", actif: false, url:"img/sauce_tomate.png", prix: 2},
    {nom: "fromage", actif: false, url:"img/fromage.png", prix: 4},
    {nom: "pepperoni", actif: false, url:"img/pepperoni.png", prix: 6},
    {nom: "piments", actif: false, url:"img/piment.png", prix: 4},
    {nom: "épinards", actif: false, url:"img/epinard.png", prix: 3},
    {nom: "champignons", actif: false, url:"img/champignons.png", prix: 4},
    {nom: "ananas", actif: false, url:"img/ananas.png", prix: 5},
    {nom: "oignons", actif: false, url:"img/ognion.png", prix: 4},
    {nom: "olives", actif: false, url:"img/olives.png", prix: 2},
    {nom: "grenouille", actif: false, url:"img/grenouille.png", prix: 35},
  ]);

  const [prixPizza, setPrixPizza] = useState(10);

  const navigate = useNavigate();
  
  const enregistrer = () => {
    const pizza = {
      nom: nom,
      ingredients:[]
    }

    ingredients.map((ingredient) => {
      if(ingredient.actif === true){
        pizza.ingredients.push({nom: ingredient.nom, url:ingredient.url, prix:ingredient.prix});
      }
    });

    setListePizza(previous => ([pizza, ...previous]))
    annuler();
    navigate(`/pizza`); //La pizza créée sera toujours la première
  };

  const annuler = () => {
    setIngredients(previous => previous.map((ingredAModifier) => {
      return {
        ...ingredAModifier,
        actif: false
      }
    }));
    setNom("");
  };

  const ingredientOnChange = (i) => {
    setIngredients(previous => previous.map((ingredAModifier, index) => {
      return index !== i ? ingredAModifier : {
        ...ingredAModifier,
        actif: ! ingredAModifier.actif
      }}));
  }

  const calculerPrixIngredientsActif = (ingredients) => {
    let prixPizza = 10;
    ingredients.map((ingred) => {
      if(ingred.actif) {
        prixPizza += ingred.prix;
      }
    });
    return(
      prixPizza
    );
  }

  return (
    <>
      <Nav calculerPrixPanier={calculerPrixPanier} calculerPrixPizza={calculerPrixPizza} setListeCommandes={setListeCommandes} isOnPizzaCreate={true} setPanier={setPanier} panier={panier} panierOuvert={panierOuvert} setPanierOuvert={setPanierOuvert}/>
      <header>
        <h1>Création pizza</h1>
      </header>
      <main>
        <div className="form">
          <h2>Paramètres</h2>
          <h3>Ingrédients</h3>
          <div className='choix'>
            <ul>
              {ingredients.map((ingredient, i)=>(
                <li key={ingredient.nom}>
                  <div className='infosIngredient'>
                    <label className="ingredient" htmlFor={ingredient.nom}>{ingredient.nom}</label>
                    <p>+ {ingredient.prix}.00$</p>
                  </div>
                  <input onInput={(e)=>setPrixPizza(calculerPrixIngredientsActif(ingredients))} onChange={(e)=>ingredientOnChange(i)} data-testid='check_box' checked={ingredient.actif} value={ingredient.actif} type="checkbox" name={ingredient.nom} id={i} />
                </li>
              ))}
            </ul>
          </div>
          <h3>Prix:</h3>
          <p className='prixCreation'>{prixPizza}.00$</p>
          <h3>Nom</h3>
          <div className="choixNom">
            <input data-testid='nom' onChange={(e)=> setNom(e.target.value)} value={nom} type="text" className="Input" placeholder="Nom de la pizza..."/>
          </div>
          <div>
            <button className="btn" data-testid='bouton_sauvegarde' onClick={enregistrer} disabled={(
              ingredients[0].actif === false &&
              ingredients[1].actif === false &&
              ingredients[2].actif === false &&
              ingredients[3].actif === false &&
              ingredients[4].actif === false &&
              ingredients[5].actif === false &&
              ingredients[6].actif === false &&
              ingredients[7].actif === false &&
              ingredients[8].actif === false &&
              ingredients[9].actif === false ||
              nom.trim() === ""
              )} >Enregistrer</button>
            <button className="btn" data-testid='bouton_reinitialise' onClick={annuler}>Annuler</button>
          </div>
        </div>
        <div className='pizza'>
          <h2 className='pizzaTitre'>Pizza</h2>
          <div className='image_principale'>
            <img src="/img/pain.png" alt="pain"/>
            {ingredients.map((ingredient, i)=>(
                  <img key={ingredient.nom} src={`/${ingredient.url}`} alt={ingredient.nom} hidden={!ingredient.actif}/>
            ))}
            <h3 className='titleCurrentPizza'>{nom}</h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pizza;