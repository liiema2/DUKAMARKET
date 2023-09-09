import React from 'react'

import Section1 from "../../components/ui/home/support";
import Section2 from "../../components/ui/home/sale";
import Section3 from "../../components/ui/home/dealsOfDay";
import Section4 from "../../components/ui/home/bestseller";
import Section5 from "../../components/ui/home/selling";
import Section6 from "../../components/ui/home/featured";
import Section7 from "../../components/ui/home/bannerSell";
import Section8 from "../../components/ui/home/hotDeals";
import Section9 from "../../components/ui/home/recommended";
import Section10 from "../../components/ui/home/section10";
import Section11 from "../../components/ui/home/contact";
import Banner from "../../components/ui/home/Banner";


export default function index() {
  return (
    <div>


{/* <Home></Home> */}
      {/* <Header></Header> */}
      <Banner></Banner>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Section9></Section9>
      <Section10></Section10>
      <Section11></Section11>
      {/* <Footer></Footer> */}

    </div>
  )
}
