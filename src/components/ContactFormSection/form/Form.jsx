import './form.css'
import './formMedia.css'

const Form = () => {
    return ( 
        <div className="form__block">
            <div className="form__title">let's build the FUTURE together</div>
            <form action="" method='post' className="form">
                <div class="form__row">
                    <div class="form__group">
                        <input name='myInput' class="input" placeholder=" "/>
                        <label for="" class="label">
                            your name
                        </label >
                    </div>
                    <div class="form__group">
                        <input type="text" class="input" placeholder=" "/>
                        <label for="" class="label">
                            email
                        </label >
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__group">
                    <select name="choice"  className='select'>
                    <option value="" selected disabled hidden>select service</option>
                        <option value="first">First Value</option>
                        <option value="second">Second Value</option>
                        <option value="third">Third Value</option>
                    </select>
                    </div>
                    <div class="form__group">
                        <input type="text" class="input" placeholder=" "/>
                        <label for="" class="label">
                            budget range
                        </label >
                    </div>
                </div>
                <div class="form__row last-row">
                    <div class="form__group">
                        <input type="text" class="input" placeholder=" "/>
                        <label for="" class="label">
                            project description
                        </label >
                    </div>
                </div>
                <button className='form_btn'>
                    <div className="btn_text">Send</div>
                    <img src="./img/arrow_green_up.svg" alt="icon"/>
                </button>
            </form>
        </div>
     );
}
 
export default Form;