import React from "react";
import GenListe from "./GenListe";
import axios from "axios";

//@objet Jason
/*let utils = [{code:'util001', nom :'Mani', prenom: 'Desira'},
            {code:'util002', nom :'Lasso', prenom: 'Polo'},
            ];*/

class Liste extends React.Component{  
    
    constructor(props){
        super(props);
        this.state={
            utilisateurs:[]
        }
        //Liaison necesssaire afin de permetre à la fonction deleteUtil d'utiliser "this"
        this.deleteUtil = this.deleteUtil.bind(this);
    }

    componentDidMount(){
       // this.setState({utilisateurs:utils})
      /*axios.get('http://localhost:3001/util/utils')//@effectue une requette get vers backend

       .then(response => {
           console.log(response.data);
           if (response.data.length > 0){
               this.setState({
                   utilisateurs: response.data})
           }
       })
       .catch((error)=>{
           console.log(error);
       })*/
       axios.get('http://10.30.40.121:3136/util/utils')//@effectue une requette get vers backend

       .then(response => {
           console.log(response.data);
           if (response.data.length > 0){
               this.setState({
                   utilisateurs: response.data})
           }
       })
       .catch((error)=>{
           console.log(error);
       })
    }
    userList(){
        //@ map permet de recupérer les infos des utilisateurs (un à un) dans utilicourant.
        return this.state.utilisateurs.map(utilCourant =>{
            return <GenListe utilisateur = {utilCourant} deleteUtil={this.deleteUtil} key = {utilCourant._id} />;
        });
               
    }

    //@DELETE Util
    deleteUtil(id){
        axios.delete('http://10.30.40.121:3136/util/delUtil/'+id)
        .then(res => console.log(res.data));
        this.setState({
            utilisateurs:this.state.utilisateurs.filter(el =>el._id !==id)
        })
    }

    

    render(){       
        return(
            <div className="container">
                
                <h3>Liste des utilisateurs</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.userList()}
                    </tbody>
                </table>                
            </div>
        );
    }

   
}
export default Liste;
