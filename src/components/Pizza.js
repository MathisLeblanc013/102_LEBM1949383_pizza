import { useState } from 'react';
import './Pizza.css';
import Tuile from "./Tuile.js"

function Pizza() {

  const [nom, setNom] = useState("");

  const [ingredients, setIngredients] = useState([
    {nom: "sauce tomate", actif: false, url:"img/sauce_tomate.png"},
    {nom: "fromage", actif: false, url:"img/fromage.png"},
    {nom: "pepperonis", actif: false, url:"img/pepperoni.png"},
    {nom: "piments", actif: false, url:"img/piment.png"},
    {nom: "épinards", actif: false, url:"img/epinard.png"},
    {nom: "champignons", actif: false, url:"img/champignons.png"},
    {nom: "ananas", actif: false, url:"img/ananas.png"},
    {nom: "ognions", actif: false, url:"img/ognion.png"},
    {nom: "olives", actif: false, url:"img/olives.png"},
    {nom: "grenouille", actif: false, url:"img/grenouille.png"},
  ]);

  const [listPizza, setlistPizza] = useState([
      {
        nom: "Pizza Frog",
        ingredients:[
          {nom: "sauce tomate", url:"img/sauce_tomate.png"},
          {nom: "fromage", url:"img/fromage.png"},
          {nom: "pepperonis", url:"img/pepperoni.png"},
          {nom: "olives", url:"img/olives.png"},
          {nom: "grenouille", url:"img/grenouille.png"},
        ]
      },
      {
        nom: "Crimes Against Humanity",
        ingredients:[
          {nom: "sauce tomate", url:"img/sauce_tomate.png"},
          {nom: "ananas", url:"img/ananas.png"},
        ]
      },
      {
        nom: "Mat",
        ingredients:[
          {nom: "sauce tomate", url:"img/sauce_tomate.png"},
          {nom: "fromage", url:"img/fromage.png"},
          {nom: "pepperonis", url:"img/pepperoni.png"},
          {nom: "champignons", url:"img/champignons.png"},
          {nom: "ognions", url:"img/ognion.png"},
          {nom: "olives", url:"img/olives.png"},
        ]
      }
    ]);


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
    console.log(pizza);
    setlistPizza(previous => ([pizza, ...previous]))

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

  return (
    <>
      <header>
        <h1>Création de pizza</h1>
      </header>
      <main>
        <div className="form">
          <h2>Paramètres</h2>
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
            <div className="nom">
              <input data-testid='nom' onChange={(e)=> setNom(e.target.value)} value={nom} type="text" className="Input" placeholder="Nom de la pizza..."/>
            </div>
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
          <h2>Pizza</h2>
          <div className='image_principale'>
            <img src="img/pain.png" alt="pain"/>
            {ingredients.map((ingredient, i)=>(
                  <img key={ingredient.nom} src={ingredient.url} alt={ingredient.nom} hidden={!ingredient.actif}/>
            ))}
            <h3 className='titleCurrentPizza'>{nom}</h3>
          </div>
        </div>
        <ul className='listPizza'>
          {listPizza.map((pizza, i)=>(
            <Tuile pizza={pizza} index={i}/>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Pizza;