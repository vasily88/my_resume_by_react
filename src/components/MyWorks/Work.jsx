import { GitHub } from '@mui/icons-material'
import { Link } from '@mui/icons-material'

const Work = (props) => {

    return(
        <div className="singleWork">

            <h4>{props.title}</h4>

            <div className="wrapperSingleWork">

                <img className="imageWork" src={props.imageName} alt="me" />

            </div>

            <div className="hoverSingleWork">
                <div className="iconsSingleWork">
                    {props.linkGithub.length > 0 ? <a href={props.linkGithub} target='_blank'><GitHub /><p>GitHub</p></a> : null}
                    {props.linkWeb.length > 0 ? <a href={props.linkWeb} target='_blank'><Link /><p>Web</p></a> : null}      
                </div>
                <p className="desriptionWork">
                    {props.description}
                </p>
                <div className="platforms">
                    
                </div>
            </div>

        </div>
    )
}

export default Work