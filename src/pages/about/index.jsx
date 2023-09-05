import React from 'react'
import Banner from '../../components/ui/about/banner'
import Footer from "../../components/ui/home/footer";
import Header from "../../components/ui/home/header";
import Description from "../../components/ui/about/description"
import Ideas from "../../components/ui/about/ideas"
import Technology from "../../components/ui/about/technology"
import Team from "../../components/ui/about/team"
import Location from "../../components/ui/about/locationstore"
import Follow from "../../components/ui/about/follow"
export default function index() {
  return (
    <div>
        <Header></Header>
      
        <Banner></Banner>
        <Description></Description>
        <Ideas></Ideas>
        <Technology></Technology>
        <Team></Team>
        <Location></Location>
        <Follow></Follow>
        <Footer></Footer>
    </div>
  )
}
