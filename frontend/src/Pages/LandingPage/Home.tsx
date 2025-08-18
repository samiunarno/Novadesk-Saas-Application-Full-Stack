import Hero from "../../Component/Hero";
import Ourtools from "./Ourtools";
import PricingCards from "./Plane";
import Testimonials from "./Testimonials";


export default function Home() {
  return (
    <>
    {/* hero section */}
     <Hero/>
     {/* our tools */}
     <Ourtools/>
     {/* testimonials */}
     <Testimonials/>
     {/* plane  */}
     <PricingCards/>
    </>
  )
}
