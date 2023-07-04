
import './worksSection.css';
import './worksSectionMedia.css'

import Project from './Project/Project'
const WorksSection = () => {
    return ( 
        <section className="works">
            <div className="container">
                <div className="works__section__content">
                    <Project>
                        <div className='works__section-item'>
                            <h2 className="works__section__title">works</h2>
                        </div>
                    </Project>
                    <Project/>
                    <Project>
                        <div className="work__section__btn">
                            <div className="work__btn">
                                <div className="btn__txt">Show more projects</div>
                                <div className="img__block">
                                <   img src="./img/arrow_Up_Right.svg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </Project>
                </div>
            </div>
        </section>
     );
}
 
export default WorksSection;