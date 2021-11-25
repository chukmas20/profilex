import React, {useContext} from 'react'
import "./toggle.css";
import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import { ThemeContext } from '../../context';


const Toggle = () => {
    const Theme = useContext(ThemeContext)

    const handleClick = ()=>{
        Theme.dispatch({type: "TOGGLE"})
    }
    return (
        <div className="t">
             <img src={Sun}  alt="sun"  className="t-icon"/>
             <img src={Moon}  alt="sun"  className="t-icon"/>
             <div className="t-button" onClick={handleClick} style={{left: Theme.state.darkMode ? 0 : 25}}></div>

        </div>
    )
}

export default Toggle
