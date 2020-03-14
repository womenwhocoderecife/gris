import React from "react";
import HowToContribute from "./Components/HowToContribute";
import Services from "./Components/Services";
import WhereWeAre from "./Components/WhereWeAre";
import Banner from "./Components/Banner";

export default function Home() {
    return (
        <div>
            <Banner/>
            <Services/>
            <HowToContribute/>
            <WhereWeAre/>
        </div>);
}
