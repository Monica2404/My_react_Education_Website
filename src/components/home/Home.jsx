import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Testimonal from "./testimonial/Test";
import Hblog from "./HBlog";
import Hprice from "./HPrice";
const Home =()=>{
    return(
        <div>
            <Hero />
            <AboutCard />
            <HAbout />
            <Testimonal/>
            <Hblog/>
            <Hprice/>
        </div>
    )
}
export default Home