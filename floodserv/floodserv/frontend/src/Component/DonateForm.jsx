import React from 'react';
import '../Css/DonateForm.css';
function DonateForm(){
    return(
        <>
          <div class="container-fluid">
                <div class="row">
                    <div class="col f-bg">
                       <div className=" wrapper">
                       <form class="form" action="/donateinfo" method="post">
                            <h1 >Fundraiser</h1>
                            <div class="inputfield">
                                <label>Name</label>
                                <input name="name" type="text" class="input"/>
                            </div>  
                            <div class="inputfield">
                                <label>Email </label>
                                <input name="email" type="email" class="input"/>
                            </div>       
                            <div class="inputfield">
                                <label>Phone Number</label>
                                <input name="phone" type="tel" class="input"/>
                            </div> 
                            <div class="inputfield">
                                <label>Address</label>
                                <textarea name="address" class="textarea"></textarea>
                            </div> 
                            <div class="inputfield">
                                <label>Postal Code</label>
                                <input name="postalcode" type="text" class="input"/>
                            </div> 
                            <div class="inputfield">
                                <label>Amount</label>
                                <input name="amount" type="number" class="input"/>
                            </div>
                            <div class="inputfield">
                                <input type="submit" name="submit" value="Donate" class="btn"/>
                            </div>
                        </form>
                    
                       </div>
                       </div>	
                </div>
            </div>
            
        </>
    )
}
export default DonateForm;