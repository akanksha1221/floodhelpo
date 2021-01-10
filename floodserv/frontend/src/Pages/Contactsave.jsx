import React from 'react';
import { useHistory } from "react-router-dom";
import '../Css/contsave.css';
function Contactsave(){
    let history = useHistory();
    return(
        <>
          <div class="container-fluid">
                <div class="row">
                    <div class="col bg">
                       <div className=" body">
                            <p class="text">INFORMATION STORED!<br/>We will contact you shortly.<br/>
                            <button onClick={() => history.goBack()}>Go back!</button>
                            </p>
                       </div>
                       </div>	
                </div>
            </div>
            
        </>
    )
}
export default Contactsave;