import PizzaCreation from "./PizzaCreation.js"
import ListePizza from "./ListePizza.js"
import PizzaInfos from "./PizzaInfos.js"
import Commandes from "./Commandes.js"
import Authentification from "./Authentification.js"
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useState } from 'react';

const App = props => {

  const [estIdentifier, setEstIdentifier] = useState();

  const [nomUtilisateur, setNomUtilisateur] = useState();

  const [listePizza, setListePizza] = useState([
    {
      nom: "Pizza Frog",
      ingredients:[
        {nom: "sauce tomate", url:"img/sauce_tomate.png", prix: 2},
        {nom: "fromage", url:"img/fromage.png", prix: 4},
        {nom: "pepperonis", url:"img/pepperoni.png", prix: 6},
        {nom: "olives", url:"img/olives.png", prix: 2},
        {nom: "grenouille", url:"img/grenouille.png", prix: 35},
      ]
    },
    {
      nom: "Crimes Against Humanity",
      ingredients:[
        {nom: "sauce tomate", url:"img/sauce_tomate.png", prix: 2},
        {nom: "ananas", url:"img/ananas.png", prix: 5},
      ]
    },
    {
      nom: "Mat",
      ingredients:[
        {nom: "sauce tomate", url:"img/sauce_tomate.png", prix: 2},
        {nom: "fromage", url:"img/fromage.png", prix: 4},
        {nom: "pepperonis", url:"img/pepperoni.png", prix: 6},
        {nom: "champignons", url:"img/champignons.png", prix: 4},
        {nom: "ognions", url:"img/ognion.png", prix: 4},
        {nom: "olives", url:"img/olives.png", prix: 2},
      ]
    }
  ]);

  const [panier, setPanier] = useState([]);

  const [listeCommandes, setListeCommandes] = useState([]);

  const [panierOuvert, setPanierOuvert] = useState(false);

  const calculerPrixPizza = (ingredients) => {
    let prixPizza = 10;
    ingredients.map((ingred) => {
        prixPizza += ingred.prix;
    });
    return(
      prixPizza
    );
  };

  const calculerPrixPanier = (panier) => {
    let prix = 0;
    panier.map((pizza, i) => {
        prix += calculerPrixPizza(pizza.ingredients) * pizza.nb;
    });
    return(
        prix
    );
  };

  function ajoutPanier (pizza) {
    // console.log(pizza);
    if(panier.find(e => e.nom === pizza.nom && e.ingredients === pizza.ingredients) === undefined){ //nouveau
        pizza.nb = 1;
        setPanier(previous => ([pizza, ...previous]));
    } else { //existe déjà
        const pizzaAModifier = panier.find(e => e.nom === pizza.nom && e.ingredients === pizza.ingredients);
        setPanier(previous => previous.map((pizza) => {
            return pizza !== pizzaAModifier ? pizza : {
                ...pizza,
                nb: pizza.nb + 1
            }
        }));
  }
}

  //  À LIRE  //Je sais qu'il aurait été plus facile de mettre la composante Nav comme parent dans les routes
  // mais je voulais respecter les consignes du devis selon les pages attendues et leur url.

  const routes = [
    {
      path: "/login",
      element: <Authentification estIdentifier={estIdentifier} setEstIdentifier={setEstIdentifier} nom={nomUtilisateur} setNom={setNomUtilisateur}/>,
    },{
      path: "/pizza",
      element: <ListePizza calculerPrixPanier={calculerPrixPanier} ajoutPanier={ajoutPanier} calculerPrixPizza={calculerPrixPizza} setListeCommandes={setListeCommandes} listePizza={listePizza} setPanier={setPanier} panier={panier} panierOuvert={panierOuvert} setPanierOuvert={setPanierOuvert}/>,
      children: [{
          index: true,
          element: <Navigate to="/pizza/1" replace/>
        },{
          path: ":pizzaId",
          element: <PizzaInfos ajoutPanier={ajoutPanier} calculerPrixPizza={calculerPrixPizza} listePizza={listePizza} setPanier={setPanier} panier={panier}/>,
          // loader: (data) => listePizza[data.params.pizzaId - 1],
        }]
    }, {
      path: "/pizza/creer",
      element: <PizzaCreation calculerPrixPanier={calculerPrixPanier} calculerPrixPizza={calculerPrixPizza} setListeCommandes={setListeCommandes} setListePizza={setListePizza} setPanier={setPanier} panier={panier} panierOuvert={panierOuvert} setPanierOuvert={setPanierOuvert}/>
    }, {
      path: "/commande",
      element: <Commandes calculerPrixPanier={calculerPrixPanier} calculerPrixPizza={calculerPrixPizza} listeCommandes={listeCommandes} setListeCommandes={setListeCommandes} setListePizza={setListePizza} setPanier={setPanier} panier={panier} panierOuvert={panierOuvert} setPanierOuvert={setPanierOuvert}/>
    }
    ,{
      path: "*",
      element: <Navigate to="/pizza" replace/>
    }
  ];

  return (
    <RouterProvider router={(estIdentifier ?
      createBrowserRouter(routes) : 
      createBrowserRouter([
        {
          path: "*",
          element: <Navigate to={"/login"}/>,
        }, {
          path: "/login",
          element: <Authentification estIdentifier={estIdentifier} setEstIdentifier={setEstIdentifier}/>,
        }])
    )}/>
  );
}

export default App;