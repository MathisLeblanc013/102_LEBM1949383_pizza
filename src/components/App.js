import PizzaCreation from "./PizzaCreation.js"
import ListePizza from "./ListePizza.js"
import PizzaInfos from "./PizzaInfos.js"
import Authentification from "./Authentification.js"
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useState } from 'react';

const App = props => {

  const [estIdentifier, setEstIdentifier] = useState();

  const [nom, setNom] = useState();

  const [listePizza, setListePizza] = useState([
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

  const routes = [
    {
      path: "/login",
      element: <Authentification estIdentifier={estIdentifier} setEstIdentifier={setEstIdentifier} setNom={setNom}/>,
    },{
      path: "/pizza",
      element: <ListePizza listePizza={listePizza}/>,
      children: [{
          index: true,
          element: <Navigate to="/pizza/1" replace/>
        },{
          path: ":pizzaId",
          element: <PizzaInfos/>,
          loader: (data) => listePizza[data.params.pizzaId - 1],
      }]
    }, {
      path: "/pizza/creer",
      element: <PizzaCreation setListePizza={setListePizza}/>
    }, {
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