import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <div className="footer">
            <div className="hrFooter"></div>
            <div className="contentFooter">

                <div className="nameFooter">
                    <h4>Vasily Loban</h4>
                    <h5>front-end developer</h5>
                </div>

                <div className="menuFooter">
                    <Link to='/my-works'><button><p>My Works</p></button></Link>
                    <p>|</p>
                    <Link to='/resume'><button><p>Resume</p></button></Link>
                    <p>|</p>
                    <Link to='/'><button><p>Home</p></button></Link>
                </div>

            </div>
        </div>
    )
}

export default Footer