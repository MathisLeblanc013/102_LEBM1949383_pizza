import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Pizza.css';

function Pizza({setListePizza}) {

  const [nom, setNom] = useState("");

  const [ingredients, setIngredients] = useState([
    {nom: "sauce tomate", actif: false, url:"img/sauce_tomate.png"},
    {nom: "fromage", actif: false, url:"img/fromage.png"},
    {nom: "pepperoni", actif: false, url:"img/pepperoni.png"},
    {nom: "piments", actif: false, url:"img/piment.png"},
    {nom: "épinards", actif: false, url:"img/epinard.png"},
    {nom: "champignons", actif: false, url:"img/champignons.png"},
    {nom: "ananas", actif: false, url:"img/ananas.png"},
    {nom: "oignons", actif: false, url:"img/ognion.png"},
    {nom: "olives", actif: false, url:"img/olives.png"},
    {nom: "grenouille", actif: false, url:"img/grenouille.png"},
  ]);

  const navigate = useNavigate();
  
  const enregistrer = () => {
    const pizza = {
      nom: nom,
      ingredients:[]
    }

    ingredients.map((ingredient) => {
      if(ingredient.actif === true){
        pizza.ingredients.push({nom: ingredient.nom, url:ingredient.url});
      }
    });
    setListePizza(previous => ([pizza, ...previous]))
    annuler();
    navigate(`/pizza`); //La pizza créée sera toujours la première
  };

  const annuler = () => {
    console.log("fewf");
    setIngredients(previous => previous.map((ingredAModifier) => {
      return {
        ...ingredAModifier,
        actif: false
      }
    }));
    setNom("");
  };

  return (
    <>
      <header>
        <h1>Créations pizza</h1>
      </header>
      <main>
        <div className="form">
          <h2>Paramètres</h2>
          <h3>Ingrédients</h3>
          <div className='choix'>
            <ul>
              {ingredients.map((ingredient, i)=>(
                <li key={ingredient.nom}>
                  <label className="ingredient" htmlFor={ingredient.nom}>{ingredient.nom}</label>
                  <input onChange={(e)=> setIngredients(previous => previous.map((ingredAModifier) => {
                    return ingredAModifier.nom !== ingredient.nom ? ingredAModifier : {
                      ...ingredAModifier,
                      actif: !ingredient.actif
                    }
                  }
                  ))} data-testid='check_box' checked={ingredient.actif} value={ingredient.actif} type="checkbox" name={ingredient.nom} id={i} />
                </li>
              ))}
            </ul>
          </div>
          <h3>Nom</h3>
          <div className="choixNom">
            <input data-testid='nom' onChange={(e)=> setNom(e.target.value)} value={nom} type="text" className="Input" placeholder="Nom de la pizza..."/>
          </div>
          <div>
            <button data-testid='bouton_sauvegarde' onClick={enregistrer} disabled={(
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
            <button data-testid='bouton_reinitialise' onClick={annuler}>Annuler</button>
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