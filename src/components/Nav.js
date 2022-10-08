import { Link } from 'react-router-dom';
import { useState } from 'react';
import Panier from "./Panier.js"

function Nav({calculerPrixPanier, calculerPrixPizza, setListeCommandes, isOnPizzaList, isOnPizzaCreate, isOnCommandes, panier, setPanier, prixPanier, setPrixPanier, panierOuvert, setPanierOuvert})
{
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li>
                        <Link className={isOnPizzaList ? "onIt" : ""} to={'/pizza/1'}>
                            Liste pizza
                        </Link>
                    </li>
                    <li>
                        <Link className={isOnPizzaCreate ? "onIt" : ""} to={'/pizza/creer'}>
                            Créer pizza
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a className={panierOuvert ? "onIt" : ""} onClick={(e)=>setPanierOuvert(previous => !previous)}>
                            Panier
                        </a>
                    </li>
                    <li>
                        <Link className={isOnCommandes ? "onIt" : ""} to={'/commande'}>
                            Commandes
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='panier'>
                <div className={panierOuvert ? "panierOuvert" : "panierFermer"}>
                    <Panier calculerPrixPanier={calculerPrixPanier} calculerPrixPizza={calculerPrixPizza} setListeCommandes={setListeCommandes} panier={panier} setPanier={setPanier} prixPanier={prixPanier} setPrixPanier={setPrixPanier}/>
                </div>
            </div>
        </>
    )
}

export default Nav;