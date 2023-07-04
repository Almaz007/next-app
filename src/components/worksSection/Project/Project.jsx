import './project.css'
import './projectMedia.css'

const Project = ({children}) => {
    return ( 
        <div className="project">
            <div className="project__body">
                <div className='project__item'>
                    {children}
                </div>
                <div className='project__item'>
                    <img className="project__img" src="./img/Project.png" alt="project"/>
                    <div className="project__title">
                        <div className="title">increasing brand recognition</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Project;