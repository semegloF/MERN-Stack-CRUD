import React from "react";
import {Link} from 'react-router-dom'; //permet d'utiliser le reoutage

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navPers ">
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand">Bienvenue</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item active">
                        <Link to="/liste" className="nav-link">Utilisateurs</Link>
                    </li>

                    <li class="navbar-item">
                        <Link to="/ajout" className="nav-link">Ajout d'utilisateur</Link>
                    </li>
                 </ul>
            </div>
     
        </nav>
        )
    }
}
 export default Navbar;