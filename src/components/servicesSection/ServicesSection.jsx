import './servicesSection.css';
import './servicesSectionMedia.css';

import Service from './Service/Service';
const ServicesSection = () => {

    const data = [
        {
            "id": 1,
            "title": 'development',
            "text": `Lorem ipsum dolor sit amet consectetur. Purus quis lectus urna sed tincidunt eu eget placerat at.
                     Augue netus ultricies dui vestibulum eget euismod. Nullam vitae integer erat aliquam cras at facilisi.`,
            "tabs":{
                "erp development": '/route',
                "crm development": '/route',
                "software development": '/route',
                "web development": '/route',
                "mobile development": '/route',
            }
        },
        {
            "id":2,
            "title": 'design',
            "text": `Lorem ipsum dolor sit amet consectetur. Purus quis lectus urna sed tincidunt eu eget placerat at.
                     Augue netus ultricies dui vestibulum eget euismod. Nullam vitae integer erat aliquam cras at facilisi.`,
            "tabs":{
                "web design": '/route',
                "ux/ui design": '/route',
                "mobile design": '/route',
            }
        },
        {   "id":3,
            "title": 'marketing',
            "text": `Lorem ipsum dolor sit amet consectetur. Purus quis lectus urna sed tincidunt eu eget placerat at.
                     Augue netus ultricies dui vestibulum eget euismod. Nullam vitae integer erat aliquam cras at facilisi.`,
            "tabs":{
                "seo": '/route',
                "content marketing": '/route',
                "tergeted advertising ": '/route',
            }
        }
    ]

    return ( 
        <section className="services">
            <div className="container">
                <h2 className="services__title">services</h2>
                {
                    data.length ? data.map(serviceItem => (<Service serviceItem = {serviceItem} />))
                                : <p>Нету данных</p>
                }
            </div>
        </section>
     );
}
 
export default ServicesSection;