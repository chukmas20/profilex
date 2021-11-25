import "./about.css";
import Award from "../../images/award.jpeg";



const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="laptop"  className="a-img"
                        />
                    </div>
            </div>
            <div className="a-right">
                 <h1 className="a-title"> About Me</h1>
                 <p className="a-sub">
                     In publishing and graphic design,
                      Lorem ipsum is a placeholder text commonly
                 </p>
                 <p className="a-desc">
                    In publishing and graphic design,
                    Lorem ipsum is a placeholder text commonly
                    used to demonstrate the visual form of a document
                     or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.
                 </p>
                 <div className="a-award">
                     <img src={Award} alt="award" className="a-award-img"  />
                     <div className="a-award-texts">
                         <h4 className="a-award-title">
                            Lorem ipsum may be used as a placeholder before final copy is available.
                         </h4>
                         <p className="a-award-desc">
                            Lorem ipsum may be used as a placeholder before final copy is available.  
                         </p>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default About
