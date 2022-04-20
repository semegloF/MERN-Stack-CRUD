import React from "react";
import mernLogo from "./mernLogo.png"


class Logo extends React.Component{
    render(){
        return(
            <div className="container">
                    <a href="https://fr.reactjs.org/"><img src={mernLogo} alt="Logo" /></a>
            </div>
        )
    }
}
export default Logo;