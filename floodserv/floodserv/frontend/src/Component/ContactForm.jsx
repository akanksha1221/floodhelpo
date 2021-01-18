import React from 'react';
import '../Css/ContactForm.css';
function ContactForm(){
    return(
        <>
          <div class="container">
                <div class="row">
                    <div class="col">
                        <form class="box" action="/saved" method="post">
                            <legend class="text-center header">Give your details<br/>We will contact you shortly<br/></legend>
                            <input id="fname" name="name" type="text" placeholder="Full Name" />
                            <input id="phone" name="phone" type="tel" placeholder="Phone"  col="6"/>
                            <input id="email" name="email" type="text" placeholder="Email" />
                            <textarea  for="message" id="message" name="message" placeholder="Enter your message for us here." rows="7"></textarea>
                            <input type="submit" name="submit" value="Send"/>   
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactForm;