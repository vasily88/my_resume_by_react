import { Link } from "react-router-dom";

import { Email } from "@mui/icons-material"
import { DocumentScanner } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { House } from "@mui/icons-material";

import pdfFile from '../../assets/Vasily Loban Resume 2024.pdf';

const Header = () => {
    return(
        <div className="header">

            <div className="rightHeader">
                <button><a href="mailto:vasek88@gmail.com"><Email /><p>vasek88@gmail.com</p></a></button>
            </div>

            <div className="leftHeader">
                <Link to='/my_resume_by_react/dist/my-works'><button><DocumentScanner /><p>My Works</p></button></Link>
                <a href={pdfFile} download="Vasily Loban Resume 2024.pdf"><button><Person /><p>Resume</p></button></a>
                <Link to='/my_resume_by_react/dist/'><button><House /><p>Home</p></button></Link>

                {/* <Link to='/my-works'><button><DocumentScanner /><p>My Works</p></button></Link>
                <a href={pdfFile} download="Vasily Loban Resume 2024.pdf"><button><Person /><p>Resume</p></button></a>
                <Link to='/'><button><House /><p>Home</p></button></Link> */}
            </div>

        </div>
    )
}

export default Header