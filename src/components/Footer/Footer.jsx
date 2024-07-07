import { Link } from "react-router-dom"

import imageLogo from '../../assets/logo.png'
import pdfFile from '../../assets/Vasily Loban Resume 2024.pdf';

const Footer = () => {
    return(
        <div className="footer">
            <div className="contentFooter">

                <div className="nameFooter">
                    <img className="imageLogo" src={imageLogo} alt="logo" />
                </div>

                <div className="menuFooter">
                    <Link to='/my_resume_by_react/dist/my-works'><button><p>My Works</p></button></Link>
                    <p>|</p>
                    <a href={pdfFile} download="Vasily Loban Resume 2024.pdf"><button><p>Resume</p></button></a>
                    <p>|</p>
                    <Link to='/my_resume_by_react/dist/'><button><p>Home</p></button></Link>
                    
                    {/* <Link to='/my-works'><button><p>My Works</p></button></Link>
                    <p>|</p>
                    <a href={pdfFile} download="Vasily Loban Resume 2024.pdf"><button><p>Resume</p></button></a>
                    <p>|</p>
                    <Link to='/'><button><p>Home</p></button></Link> */}
                </div>

            </div>
        </div>
    )
}

export default Footer