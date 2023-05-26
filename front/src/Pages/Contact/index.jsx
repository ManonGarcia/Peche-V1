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
        <div className="form__background pt-5">
            <div class="mx-auto pt-5 d-flex align-items-center flex-column" style={{width: '30rem'}}>
                <div className="text-center">
                    <h1>Envoyez moi un mail !</h1>
                    <h3>Je réponds plutôt vite ;)</h3>
                </div>
                <form className='form mt-4' style={{width: '20rem'}} ref={form} onSubmit={sendEmail}>
                    <div class="form-outline mb-4">
                        <input type="text" id="form4Example1" class="form-control border_input_form input_valid" required/>
                        <label class="form-label" for="form4Example1">Nom</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="email" id="form4Example2" class="form-control border_input_form input_valid" required/>
                        <label class="form-label" for="form4Example2">Adresse mail</label>
                    </div>

                    <div class="form-outline mb-4">
                        <textarea class="form-control border_input_form input_valid" id="form4Example3" rows="3" required></textarea>
                        <label class="form-label" for="form4Example3">Message</label>
                    </div>

                    <div className="text-center">
                        <button type="submit" class="btn btn-block mb-4 input_submit border_input_form">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
};

export default Contact;