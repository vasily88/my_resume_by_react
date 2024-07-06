import { Link } from "react-router-dom";

import { Email } from "@mui/icons-material"
import { DocumentScanner } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { House } from "@mui/icons-material";

const Header = () => {
    return(
        <div className="header">

            <div className="rightHeader">
                <button><a href="mailto:vasek88@gmail.com"><Email /><p>vasek88@gmail.com</p></a></button>
            </div>

            <div className="leftHeader">
                <Link to='/my_resume/dist/my-works'><button><DocumentScanner /><p>My Works</p></button></Link>
                <Link to='/my_resume/dist/resume'><button><Person /><p>Resume</p></button></Link>
                <Link to='/my_resume/dist/'><button><House /><p>Home</p></button></Link>
            </div>

        </div>
    )
}

export default Header