import {reviews} from  './reviews.data'
import Review from './review/Review';

import './reviewsSection.css';
import './reviewsSectionMedia.css';

const ReviewsSection = () => {
    return  ( 
        <section className="reviews__section">
            <div className="reviews__section_color">
                <div className="container">
                    <div className="reviews__section__content">
                        <h2 className="reviews__section__title">reviews</h2>
                        <div className="reviews__block">
                            <div className="left__block">
                                {
                                    reviews.map(review=> {
                                        return(
                                            review.id % 2 == 0 ? <Review key={review.id} review = {review}/>
                                                            : <></>
                                        );
                                    })
                                }
                            </div>
                            <div className="right__block">
                                {
                                    reviews.map(review=> {
                                        return(
                                            review.id % 2 != 0 ? <Review key={review.id} review = {review}/>
                                                            : <></>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ReviewsSection;