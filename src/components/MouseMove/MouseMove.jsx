import { useEffect, useState } from "react"

const MouseMove = (props) => {

    const [position,setPosition] = useState({x:0,y:0})
    const [scale,setScale] = useState(1)

    useEffect(() => {

        const handleMove = (event) => {
            setPosition({x:event.clientX,y:event.clientY})
        }

        const HandleMouseOver = () => setScale(1.5)
        const HandleMouseOut = () => setScale(1)

        window.addEventListener('mousemove',handleMove)

        const button = document.querySelectorAll('button')
        button.forEach((buttonElement) => {
            buttonElement.addEventListener('mouseover',HandleMouseOver)
            buttonElement.addEventListener('mouseout',HandleMouseOut)
        })

    },[])

    useEffect(() => {
        if (props.getDataFromMouseMove !== undefined){
            props.getDataFromMouseMove(position)
        }
    },[position])

    return (
        <div 
            className="mouse"
            style={{
                top: position.y,
                left:position.x,
                transform: `scale(${scale})`
            }}
            >
            <span></span>
        </div>
    )
}

export default MouseMove