import HeaderSection from '@/components/header/HeaderSection'
import ServicesSection from '@/components/servicesSection/ServicesSection'
import ReviewsSection from '@/components/reviewsSection/ReviewsSection'
import WorksSection from '@/components/worksSection/WorksSection'
import ContactFormSection from '@/components/ContactFormSection/ContactFormSection'

export default function Home() {
  return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <HeaderSection/>
        <WorksSection/>
        <ServicesSection/>
        <ReviewsSection/>
        <ContactFormSection/>
    </>
  );
}
