
import React from "react";
import {Link} from 'react-router-dom'; //permet d'utiliser le reoutage


class GenListe extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.utilisateur.code}</td>
                <td>{this.props.utilisateur.nom}</td>
                <td>{this.props.utilisateur.prenom}</td>
                <td>
                    <Link to={"/edit/"+ this.props.utilisateur._id} >Édition</Link> |
                    <a href="/Liste/" onClick={() => {this.props.deleteUtil(this.props.utilisateur._id)}}> Suppression</a>
                </td>
            </tr>
        )
            
    }
}
export default GenListe;