import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./FormContact.scss"
/**
 * Form Contact
 * @returns {JSX} React Component
 */
const FormContact = () => {
    const form = useRef();
    const [displayForm, setDisplayForm] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w3hol57', 'template_5egbfjr', form.current, 'NFUP3YK2Bta1k2GWK')
        .then((result) => {
            console.log(result.text);
            setDisplayForm(false);
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
            setEmailSent(false);
            displayForm(true)
        });
    };
    return(
        
        (displayForm && emailSent === false) ?(
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <input type="text" name="user_name"  placeholder={'John Doe'} required/>
                    </div>
                     <div>
                        <input type="email" name="user_email" placeholder={'johndoe@gmail.com'} required />
                    </div>
                    {/* <div>
                        <input type="text" name="user_subject" defaultValue={'Subject'} placeholder={"Let's have a meeting"}/>
                    </div> */}
                    <div>
                        <textarea name="message"  placeholder={'Hello! Is it possible to schedule a meeting on Thursday?'} />
                    </div>
            <input type="submit" value="Send your message" className="submit-btn btn" />
        </form>
            
    ) : (
            <div className="form-thanks">
                <span>Your emails has been sent!<br/>Thanks for reaching out!</span>
            </div>
    )
    )
}

export default FormContact;