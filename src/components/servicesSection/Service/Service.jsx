import './service.css'
import './serviceMedia.css'
import ServiceSvgElem from './ServiceSvgElem'

const Service = ({serviceItem}) => {
    const {id, title, text, tabs} = serviceItem;
    return ( 
        <div className="service__block">
            <div className="service__num">{"0"+id}</div>
            <div className="service__information">
                <h2 className="service__title">
                    {title}
                </h2>
                <p className="service__text">
                    {text}
                </p>
                <ul className="service__tabs">
                    { 
                        Object.keys(tabs).length ? 
                        Object.keys(tabs).map((oneKey,key)=>{
                            return (
                                <li>
                                    <a className="service__tab" href="#!">
                                        <div className="tab__text">{oneKey}</div>
                                        <ServiceSvgElem />
                                    </a>
                                </li> 
                            );
                        }):
                        <p>hello</p>
                    } 
                </ul>
            </div>
        </div>
     );
}
 
export default Service;
