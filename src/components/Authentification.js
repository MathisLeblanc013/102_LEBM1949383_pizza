import {Navigate} from 'react-router-dom';
import { useState } from 'react';

function Authentification({estIdentifier, setEstIdentifier, setNom})
{
    const [nomUtilisateur, setNomUtilisateur] = useState("");

    if(estIdentifier) {
        return(
            <Navigate to="/pizza" replace/>
        )
    }

    return (
        <div className='login'>
            <h1>Se Connecter</h1>
            <div className="choixNom">
                <label>Nom d'usager</label>
                <input data-testid='nom' onChange={(e)=> setNomUtilisateur(e.target.value)} value={nomUtilisateur} type="text" className="Input" placeholder="Nom"/>
            </div>
            <button className="btn" onClick={(e) => setEstIdentifier(true)} disabled={(
                nomUtilisateur.trim() === "" || !isNaN(nomUtilisateur)
            )}>
                Login
            </button>
        </div>
    );
}

export default Authentification;