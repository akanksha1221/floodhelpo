import React from 'react';
import Table from '../Component/Table';
function Donardetails(){

    return(
        <>
          <div className="container-fluid">
                <div className="row">
                    <div className="col bg">
                        <div className=" body">
                            <p className="text">THANK YOU!<br/>For joining our helping hands.<br/>
                            <a href="/donate"><button >Go back!</button></a>
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