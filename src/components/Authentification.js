import {Navigate} from 'react-router-dom';
import { useState } from 'react';
import './Authentification.css';

function Authentification({estIdentifier, setEstIdentifier, setNom})
{
    const [nomUtilisateur, setNomUtilisateur] = useState("");

    if(estIdentifier) {
        return(
            <Navigate to="/pizza" replace/>
        )
    }

    const authentifier = () => {
        setEstIdentifier(true);
        setNom(nomUtilisateur);
    }

    return (
        <div className='login'>
            <h1>Se Connecter</h1>
            <div className="choixNom">
                <label>Nom d'usager</label>
                <input data-testid='nom' onChange={(e)=> setNomUtilisateur(e.target.value)} value={nomUtilisateur} type="text" className="Input" placeholder="Nom"/>
            </div>
            <button onClick={authentifier} disabled={(
                nomUtilisateur.trim() === ""
            )}>
                Login
            </button>
        </div>
    );
}

export default Authentification;