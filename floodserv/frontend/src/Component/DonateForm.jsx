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
                            <h1 class="title">Donation Form</h1>
                            <div class="inputfield">
                                <label>Name</label>
                                <input name="name" type="text" class="input"/>
                            </div>  
                            <div class="inputfield">
                                <label>Email Address</label>
                                <input name="email" type="text" class="input"/>
                            </div>       
                            <div class="inputfield">
                                <label>Phone Number</label>
                                <input name="phone" type="text" class="input"/>
                            </div> 
                            <div class="inputfield">
                                <label>Address</label>
                                <textarea name="address" class="textarea"></textarea>
                            </div> 
                            <div class="inputfield">
                                <label>Postal Code</label>
                                <input name="postalcode" type="text" class="input"/>
                            </div> 
                            <div class="inputfield terms">

                                <label class="check">
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label><p>Eatables</p>
                                
                                <label class="check">
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label><p>Medicines</p>
                                
                                <label class="check">
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label><p>Clothes</p>

                            </div> 
                            <div class="inputfield">
                                <label>Discription</label>
                                <textarea name="discription" class="textarea"></textarea>
                            </div> 
                            <div class="inputfield">
                                <input type="submit" name="submit" value="Submit" class="btn"/>
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