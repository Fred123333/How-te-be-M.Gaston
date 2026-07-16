import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Specialties from '@/components/specialties'
import Menu from '@/components/menu'
import Gallery from '@/components/gallery'
import WhyChooseUs from '@/components/why-choose-us'
import Testimonials from '@/components/testimonials'
import Events from '@/components/events'
import Location from '@/components/location'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Menu />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Events />
      <Location />
      <Footer />
    </main>
  )
}
