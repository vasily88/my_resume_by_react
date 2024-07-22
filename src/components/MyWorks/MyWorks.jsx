import Work from "./Work"

import imageMe from '../../assets/me.jpeg'
import toDoImage from '../../assets/todo.png'
import mccannImage from '../../assets/mccann.jpg'
import nextjsScreen from '../../assets/nextjsScreen.png'
import myResumeScreen from '../../assets/myResumeScreen.png'
import tnuvaScreen from '../../assets/tnuvaScreen.png'
import xpengScreen from '../../assets/xpengScreen.png'
import shareLeumi from '../../assets/shareLeumi.webp'


const MyWorks = () => {
    return (
        <div className="myWorks">
            <h3>My Works</h3>

            <div className="wrapperMyWorks">
                <Work 
                    imageName={myResumeScreen} 
                    title="Portfolio - ReactJs" 
                    linkGithub="https://github.com/vasily88/my_resume_by_react"
                    linkWeb="https://vasily88.github.io/my_resume_by_react/dist/"
                    description="Welcome to my online resume portfolio, crafted with React to provide an engaging and dynamic representation of my professional journey. Designed for clarity and impact, this portfolio offers a seamless navigation experience, highlighting key aspects of my career, skills, and achievements."
                />
                <Work 
                    imageName={nextjsScreen} 
                    title="Portfolio - NextJs" 
                    linkGithub="https://github.com/vasily88/Project-Portfolio-By-Next-Js"
                    linkWeb=""
                    description="Web application developed using the Next.js framework, designed to demonstrate the power and versatility of modern web development technologies. This project serves as a practical example of utilizing Next.js's capabilities to create a robust, performant, and scalable web application."
                />
                <Work 
                    imageName={toDoImage} 
                    title="ToDo - ReactJs" 
                    linkGithub="https://github.com/vasily88/Project-ToDo-By-React"
                    linkWeb="https://vasily88.github.io/Project-ToDo-By-React/dist/"
                    description="The Todo List App with React manage their tasks efficiently, and boost productivity.
                      With its user-friendly interface and essential features, this app serves
                       as a valuable tool for individuals and teams seeking to streamline
                        task management and achieve their goals."
                />
                <Work 
                    imageName={mccannImage} 
                    title="Mccann - Wordpress" 
                    linkGithub=""
                    linkWeb="https://www.mccann.co.il/"
                    description="The WordPress site with Advanced Custom Fields (ACF) is a powerful and flexible solution for creating dynamic and customized websites. By leveraging the capabilities of WordPress and the ACF plugin, this site enables users to easily create and manage content with custom fields and extend the functionality of their WordPress installations."
                />
                <Work 
                    imageName={xpengScreen} 
                    title="Xpeng - JavaScript" 
                    linkGithub=""
                    linkWeb="https://universe.heyxpeng.co.il/"
                    description="Welcome to our interactive website powered by JavaScript! Immerse yourself in a 360-degree experience like never before. With our cutting-edge 360 libraries and dynamic Lottie JSON animations, you can explore every angle with a simple mouse movement."
                />
                <Work 
                    imageName={tnuvaScreen} 
                    title="Tnuva - Wordpress" 
                    linkGithub=""
                    linkWeb="https://chef-lavan.co.il/shavuot/"
                    description="Tnuva, a prominent Israeli food manufacturer, utilizes a WordPress website to enhance its online presence and customer engagement. The site is built using WordPress, a popular content management system, customized extensively with the ACF (Advanced Custom Fields) plugin to manage and display various types of content beyond standard posts and pages."
                />
                <Work 
                    imageName={shareLeumi} 
                    title="Leumi - Java Script" 
                    linkGithub=""
                    linkWeb="https://www.leumi.co.il/minisite/whatsapp-branches/"
                    description="Welcome to Bank Leumi, where our talented developer excels in creating fast and efficient search solutions using vanilla JavaScript. With a profound understanding of JavaScript fundamentals, skillfully build high-performance search features that enhance the functionality and user experience"
                />
            </div>

        </div>
    )
}

export default MyWorks