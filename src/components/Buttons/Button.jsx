import { Link } from "react-router-dom"

import './button.css'

const Button = (props) => {

    return(
        <>
            <Link to={props.link} >
                <button className="btn" >
                    <lottie-player 
                        src={props.lottieImageUrl}
                        background="transparent"  
                        speed="1"  
                        loop autoplay
                    ></lottie-player>
                    <div className="hover">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {props.txt}
                </button>
            </Link>
        </>
    )
}

export default Button