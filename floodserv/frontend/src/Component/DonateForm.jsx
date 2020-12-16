import React from 'react';
import '../Css/DonateForm.css';
function DonateForm(){
    return(
        <>
          <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xl-8 col-lg-8 form-container">
                
                        <form class="form-horizontal" method="post">
                            <fieldset>
                                <legend class="text-center header">Helping Hands</legend>
                               <input id="fname" name="name" type="text" placeholder="Full Name" class="form-control"/><br/>
                                <input id="phone" name="phone" type="text" placeholder="Phone" class="form-control"/><br/>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="Check1"/>
                                    <label class="form-check-label" for="Check1">Funds</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" class="form-check-input" id="Check2"/>
                                    <label class="form-check-label" for="Check2">Food</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" class="form-check-input" id="Check3"/>
                                    <label class="form-check-label" for="Check3">Medicines</label>
                                </div>
                                <textarea class="form-control" id="message" name="message" placeholder="Description of items. No. of items,Packets. Quantity, Product name" rows="7"></textarea><br/>
                                <button type="submit" class="btn btn-primary">Send</button><br/>   
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DonateForm;