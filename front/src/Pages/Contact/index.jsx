import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => { 
        e.preventDefault();
        emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY )
        .then( (result) => { alert('message sent successfully...');
            console.log(result.text);
        },
        (error) => { console.log(error.text);
        } 
        ); 
    };
    return (
        <div className="form__background">
            <div className="form_contact">
                <div className="title_form">
                    <h1>Envoyez moi un mail !</h1>
                    <h3>Je réponds plutôt vite ;)</h3>
                </div>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <div className='input_form'>
                        <input type='text' placeholder='Nom' name='user_name' className="border_input_form"/>
                        <input type='email' placeholder='Adresse mail' name='user_email' className="border_input_form"/>
                    </div>
                    <div className='message_form'>
                        <textarea name='message' type='text' placeholder='Message' className="border_input_form"></textarea>
                    </div> 
                    <input type='submit' value='Envoyer' className='input_submit border_input_form'/>
                </form>
            </div>
        </div>
    )
};

export default Contact;