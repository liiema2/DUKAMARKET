import React from 'react'

import Support from "../../components/ui/home/support";
import Sale from "../../components/ui/home/sale";
import DealsOfDay from "../../components/ui/home/dealsOfDay";
import Bestseller from "../../components/ui/home/bestseller";
import Selling from "../../components/ui/home/selling";
import Featured from "../../components/ui/home/featured";
import BannerSell from "../../components/ui/home/bannerSell";
import HotDeals from "../../components/ui/home/hotDeals";
import Recommended from "../../components/ui/home/recommended";
import Container from "../../components/ui/home/container";
import Contact from "../../components/ui/home/contact";
import Banner from "../../components/ui/home/Banner";
import Seo from "../../seo/home.jsx"

export default function index() {
  return (
    <div>

      <Banner></Banner>
      <Support></Support>
      <Sale></Sale>
      <DealsOfDay></DealsOfDay>
      <Bestseller></Bestseller>
      <Selling></Selling>
      <Featured></Featured>
      <BannerSell></BannerSell>
      <HotDeals></HotDeals>
      <Recommended></Recommended>
      <Container></Container>
      <Contact></Contact>
  
      <Seo></Seo>

    </div>
  )
}
