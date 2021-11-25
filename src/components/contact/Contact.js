import "./contact.css";
import Email from "../../images/email.png";
import  Map from "../../images/map.png";
import Phone from "../../images/phone.png";
import {useState} from "react";
import emailjs from 'emailjs-com';
import { useRef, useContext } from "react";
import { ThemeContext } from '../../context';



const Contact = () => {
    const formRef =  useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;




    const handleSubmit =(e)=>{
       e.preventDefault();
       emailjs.sendForm(
        'service_fbw4xi8',
         'template_nmkl1wo',
         formRef.current, 
        'user_AmdjZkDE9OtrBDgpjgoSm'
        )
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
    }
 
    return (
        <div className="c">
             <div className="c-bg"></div>
             <div className="c-wrapper">
                 <div className="c-left">
                     <h1 className="c-title"> Contact me for discussions</h1>
                     <div className="c-info">
                         <div className="c-info-item">
                             <img src={Phone}  alt="phone"  className="c-icon"  />
                             +2348099442608
                         </div>
                         <div className="c-info-item">
                             <img src={Email}  alt="email"  className="c-icon"  />
                               coparaeke@yahoo.com
                         </div>
                         <div className="c-info-item">
                             <img src={Map}  alt="address"  className="c-icon"  />
                               Lagos, Nigeria
                         </div>
                     </div>
                 </div>
                 <div className="c-right">
                     <p className="c-desc">
                         <b>It is a long established fact</b>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley
                     </p>
                     <form ref={formRef} onSubmit={handleSubmit}>
                          <input  style={{background: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                          <input style={{background: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                          <input style={{background: darkMode && "#333"}} type="text" placeholder="Email" name="user_name" />
                          <textarea style={{background: darkMode && "#333"}} rows="5"  placeholder="Message" name="message" />
                          <button> Submit </button>
                           {done && (
                               <h3 className="success"> Thank You, Your message has been received</h3>
                           )}
                     </form>
                 </div>
             </div>
        </div>
    )
}

export default Contact
