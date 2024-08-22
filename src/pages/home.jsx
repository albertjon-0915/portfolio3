import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Skills from "../components/skills";
import Footer from "../components/footer";

function homepage() {
     return (
          <>
               <Hero />
               <About />
               <Services />
               <Skills />
               <Footer />
          </>
     );
}

export default homepage;
