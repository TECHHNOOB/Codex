import About from '@/components/About';
import Contact from '@/components/Contact';
import CTABanner from '@/components/CTABanner';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import Marquee from '@/components/Marquee';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return <><CustomCursor/><Navbar/><main><Hero/><Marquee/><About/><Services/><Portfolio/><Process/><Industries/><Testimonials/><CTABanner/><Contact/></main><Footer/></>;
}
