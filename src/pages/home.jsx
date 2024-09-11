import React from "react";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Services from "../components/home/services";
import Skills from "../components/home/skills";
import Footer from "../components/footer";
import Reviews from "../components/home/reviews";
import { useGSAP } from "@gsap/react";
import { scrollTriggerAnimWithScrub } from "../animations/gsapAnimation";

function Homepage() {
     useGSAP(() => {
          scrollTriggerAnimWithScrub(

          )
     });

     
     return (
          <>
               <Hero />
               <About />
               <Services />
               <Skills />
               <Reviews />
               <Footer />
          </>
     );
}

export default Homepage;
