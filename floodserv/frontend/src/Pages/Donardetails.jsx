import React from 'react';
import { useHistory } from "react-router-dom";
import Table from '../Component/Table';
function Donardetails(){
    let history = useHistory();

    return(
        <>
          <div class="container-fluid">
                <div class="row">
                    <div class="col bg">
                        <div className=" body">
                            <p class="text">THANK YOU!<br/>For joining our helping hands.<br/>
                            <button onClick={() => history.goBack()}>Go back!</button>
                            </p>
                      
                       </div>
                        <Table/>
                    </div>	
                </div>
            </div>
            
        </>
    )
}
export default Donardetails;