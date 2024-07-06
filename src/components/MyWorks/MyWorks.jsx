import Work from "./Work"

import imageMe from '../../assets/me.jpeg'
import toDoImage from '../../assets/todo.png'
import mccannImage from '../../assets/mccann.jpg'


const MyWorks = () => {
    return (
        <div className="myWorks">
            <h3>My Works</h3>

            <div className="wrapperMyWorks">
                <Work 
                    imageName={toDoImage} 
                    title="Todo App" 
                    linkGithub="https://github.com/vasily88/todo"
                    linkWeb="https://vasilylobanportfolio.000webhostapp.com/todo/"
                    description="The Todo List App with React manage their tasks efficiently, and boost productivity.
                      With its user-friendly interface and essential features, this app serves
                       as a valuable tool for individuals and teams seeking to streamline
                        task management and achieve their goals."
                />
                <Work 
                    imageName={mccannImage} 
                    title="Mccann Web Site" 
                    linkGithub=""
                    linkWeb="https://www.mccann.co.il/"
                    description="The WordPress site with Advanced Custom Fields (ACF) is a powerful and flexible solution for creating dynamic and customized websites. By leveraging the capabilities of WordPress and the ACF plugin, this site enables users to easily create and manage content with custom fields and extend the functionality of their WordPress installations."
                />
                <Work 
                    imageName={imageMe} 
                    title="todo" 
                    linkGithub="https://google.com"
                    linkWeb="https://google.co.il"
                    description="description description description description description description description"
                />
                <Work 
                    imageName={imageMe} 
                    title="todo" 
                    linkGithub="https://google.com"
                    linkWeb="https://google.co.il"
                    description="description description description description description description description"
                />
            </div>

        </div>
    )
}

export default MyWorks