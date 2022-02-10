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
                      I am a passionate software developer who has single handedly designed and built applications
                      with both front and backend functionalities as well as collaborating with teams to create applications.
                      I also have product management experience.

                 </p>
                 <p className="a-desc">
                   
                 </p>
                 <div className="a-award">
                     <img src={Award} alt="award" className="a-award-img"  />
                     <div className="a-award-texts">
                         <h4 className="a-award-title">
                         </h4>
                         <p className="a-award-desc">
                             With my skills and experience level, we can build award winning applications 
                         </p>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default About
