import style from'./about.module.css'

export default function About() {
    return(
        <section className={style.about}>
            <div className={style.container}>
                <div className={style.title}>
                    <p><span>Were a Digital agency</span> <span>with 
                    a committed team</span> <span>working with
                    companies, bringing what</span> they <span>envision 
                    to life through:</span></p>
                </div>
                <div className={style.menu_about}>
                    <div className={style.menu_btn}>
                        <a href="#!"><div className={style.punkt}><p>/</p><p>development</p><p>/</p></div></a>
                        <a href="#!"><div className={style.punkt}><p>*</p><p>design</p><p>*</p></div></a>
                        <a href="#!"><div className={style.punkt}><p>/</p><p>marketing</p><p>/</p></div></a>
                    </div>
                </div>
                <div className={style.btn_div}>
                    <a className={style.btn}>
                        <p>Our services</p>
                        <img 
                            className={style.btn__info_pic}
                            src='./img/arrow_Up_Right.svg'
                            alt="services"
                            width={28}
                            height={28}
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}