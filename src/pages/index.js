import React from "react"
import Layout from "../components/common/Layout"
import Banner from "../components/home/Banner"
import About from "../components/home/About"
import Services from "../components/home/Services"
import Projects from "../components/home/Projects"
import Blog from "../components/home/Blog"
import Contact from "../components/home/Contact"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Services />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  )
}
