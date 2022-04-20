import React from "react";
import axios from "axios";


class Edit extends React.Component{

    constructor(props){
        super(props);
        this.state={
            code:'',
            nom:'',
            prenom:'',
            id:''
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
            prenom:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const util = {
            code: this.state.code,
            nom: this.state.nom,
            prenom: this.state.prenom
        }      
        console.log(util);
        axios.put('http://10.30.40.121:3136/util/upUtil/'+ this.props.match.params.id,util)
        .then(response=>{
            console.log(response.data);   
            this.props.history.push('/liste/');     
        })
        .catch((error)=>{
            console.log(error);            
        })
        console.log(this.state.code);  
        //Vide les formulaires apres soumission
        this.setState({
            Prenom:'',
            nom:'',
            code:''
        })      
        
    }

    componentDidMount(){
        //Affichade du parametre id de lien de la page dans console
        console.log(this.props.match.params.id)
        axios.get('http://10.30.40.121:3136/util/lireUnUtil/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                code: response.data.code,
                nom: response.data.nom,
                prenom: response.data.prenom,
                id:this.props.match.params.id
            })
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(this.state.code);
    }

    render(){
        return(
            <div className="cpntainer">
                <h3>Éditer un utilisateur</h3>
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
                            value={this.state.prenom}
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
                        <input type="submit" value="Editer" className="btn btn-primary"/>
                    </div>
                </form>
                
            </div>
        )
    }
}
 export default Edit;