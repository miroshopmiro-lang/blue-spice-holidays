import HeroSection from '../components/HeroSection'
import WhySection from '../components/WhySection'
import DestinationsSection from '../components/DestinationsSection'
import ServiceTiers from '../components/ServiceTiers'
import BentoGrid from '../components/BentoGrid'
import JourneyPlanner from '../components/JourneyPlanner'
import HowToBook from '../components/HowToBook'

export default function Home({ onBook }) {
  return (
    <>
      <HeroSection onBook={onBook} />
      <WhySection />
      <DestinationsSection onBook={onBook} />
      <ServiceTiers onBook={onBook} />
      <BentoGrid />
      <JourneyPlanner />
      <HowToBook />
    </>
  )
}
