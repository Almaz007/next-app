import './headerSection.css'
import './headerMedia.css'

// import ImgBtn from './ImgBtn.svg';

const HeaderSection = () => {
    return ( 
        <section className="header">
            <div className="header__section__color">
                <div className="container">
                    <div className="content__container">
                        <div className="header__title">
                            <p>Development</p>
                          
                            <p>digital products</p>

                            <p>for business</p>
                            <p>and <span>people</span></p>
    
                        </div>
                        <div className="header__footer">
                            <div className="header__footer__content">
                                <div className="header__footer__text">
                                Lorem ipsum dolor sit amet consectetur. Purus quis lectus urna sed tincidunt eu eget placerat at. 
                                Augue netus ultricies dui vestibulum eget euismod. Nullam vitae integer erat aliquam cras at facilisi. 
                                </div>
                                <div className='header__btn'>
                                    <div className='btn__text'>Let's connect</div>
                                    <img className='imgBtn' src="./ImgBtn.svg" alt="Link"/>              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HeaderSection;