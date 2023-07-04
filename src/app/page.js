import HeaderSection from '@/components/header/HeaderSection'
import About from '@/components/about/About'
import ServicesSection from '@/components/servicesSection/ServicesSection'
import ReviewsSection from '@/components/reviewsSection/ReviewsSection'
import WorksSection from '@/components/worksSection/WorksSection'
import ContactFormSection from '@/components/ContactFormSection/ContactFormSection'
import Footer from '@/components/footer/Footer'


export default function Home() {
  return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <HeaderSection/>
        <About/>
        <WorksSection/>
        <ServicesSection/>
        <ReviewsSection/>
        <ContactFormSection/>
        <Footer/>
    </>
  );
}
