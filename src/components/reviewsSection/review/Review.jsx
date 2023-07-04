import './review.css'
import './reviewMedia.css'

const Review = ({review}) => {
    const {id, name, post, src, text} = review;
    const review__text = "review__text" +(id % 2 == 0 ? " padding__right" : " padding__left");

    return ( 
        <>
        {id % 2 == 0 ? 
            <div className="review"> 
                <div className="border"></div>    
                <div className="review__information">
                    <div className="person person__left">
                        <div className="person__data">
                            <h3 className="person__name">{name}</h3>
                            <p className="preson__title">{post}</p>
                        </div>
                        <img src={src} className="person__logo" alt="img"/>
                    </div>
                    <div className={review__text}>
                        {text}
                    </div>
                </div>
            </div>
            :
            <div className="review">
                <div className="border"></div>               
                <div className="review__information">
                    <div className="person">
                        <img src={src} className="person__logo" alt="img"/>
                        <div className="person__data">
                            <h3 className="person__name">{name}</h3>
                            <p className="preson__title">{post}</p>
                        </div>
                    </div>
                    <div className={review__text}>
                        {text}
                    </div>
                </div>
            </div>
        }   
        </>
    );
}
 
export default Review;