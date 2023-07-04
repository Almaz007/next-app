"use client"

import './contactFormSection.css';
import './contactFormSectionMedia.css';
import Form from './form/Form'
import Timer from './Timer';


const ContactFormSection = () => {
    return ( 
        <section className="contact">
            <div className="container">
                <div className="contact__block">
                    <div className="contact__block__top">
                        <div className="top__text">Georgia</div>
                        <Timer/>
                    </div>
                    <div className="contact__block__bottom">
                        <div className="syHiBtn">
                            <div className="syHiBtn_txt">say Hello</div>
                            <img src="./img/arrow_Up_RightBlack.svg" alt="icon" />
                        </div>
                        <Form/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ContactFormSection;