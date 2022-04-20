import React from "react";
import axios from "axios";

class Ajout extends React.Component{

    constructor(props){
        super(props);
        this.state={
            code:'',
            nom:'',
            Prenom:''
        }
        //liaison est nécessaire afin de permettre l'utilisation de `this` dans chaque fonction de rappel
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
//Definition des methodes
    onChangeCode(e){
        this.setState({
            code:e.target.value
        })
    }
    onChangeNom(e){
        this.setState({
            nom:e.target.value
        })
    }
    onChangePrenom(e){
        this.setState({
            Prenom:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const util = {
            code: this.state.code,
            nom: this.state.nom,
            prenom: this.state.Prenom
        }      
        console.log(util);
        axios.post('http://10.30.40.121:3136/util/ajoutUtil',util)
        .then(res=>{
            console.log(res.data)
            this.props.history.push('/liste/');
        });

        //Vide les formulaires apres soumission
        this.setState({
            Prenom:'',
            nom:'',
            code:''
        })
    }

    render(){
        return(
            <div className="cpntainer">
                <h3>Ajouter un utilisateur</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.nom}
                            onChange={this.onChangeNom}
                        />
                        <label>Prenom:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.Prenom}
                            onChange={this.onChangePrenom}
                        />
                         <label>Code:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.code}
                            onChange={this.onChangeCode}
                        />

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Ajout" className="btn btn-primary"/>
                    </div>
                </form>
                
            </div>
        )
    }
}
 export default Ajout;