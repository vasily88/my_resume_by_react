import Button from "../Buttons/Button"

import myProfileImage from "../../assets/me.jpeg"
import { Web } from "@mui/icons-material"
import { Person } from "@mui/icons-material"

const HomePage = (props) => {

    return(
        <>
            <div className="about">
                <img className="myImage" src={myProfileImage} alt="vasily loban" 
                    style={{transform: `skewX(${props.positionImage.x}deg) skewY(${props.positionImage.y}deg)`}}/>

                <div className="aboutTxt">
                    <div className="box">
                        <p>Its me</p>
                    </div>
                    <h1>Vasily Loban</h1>
                    <p className="abotTextSubTitle">front-end developer</p>
                </div>

            </div>

            <div className="aboutContent">
                <div className="rightAboutContent">
                    <lottie-player 
                        src="src/assets/computer.json"  
                        background="transparent"  
                        speed="1"  
                        loop autoplay
                    ></lottie-player>
                </div>
                <div className="leftAboutContent">

                    <h3>ABOUT MYSELF</h3>
                    <p>
                    Innovative and Passionate Frontend Developer with a flair for 
                    creating captivating user experiences.
                    </p>
                    <p>
                    Armed with a strong foundation in web technologies and a keen eye for design, I bring a unique blend of 
                    creativity and technical expertise to deliver visually stunning and highly 
                    functional websites.
                    </p>
                    <p>
                    With a focus on clean code, seamless responsiveness, and cutting-edge trends, I strive to 
                    push the boundaries of what's possible in frontend development.
                    </p>

                </div>

            </div>

            <div className="buttonsFrontPage">
                <Button color="black" link="my-works" txt="My Works" lottieImageUrl="./src/assets/work.json" />
                <Button color="black" link="rsume" txt="My Resume" lottieImageUrl="./src/assets/resume.json" />
            </div>

              

        </>
    )
}

export default HomePage