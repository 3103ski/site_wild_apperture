import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import Nav from "../components/Navigation/Navigation"

import HomeContent from "../components/HomePageContent/HomePageContent"
import "./PageStylesheets/index.css"

// *************************************** //
//               HOME PAGE                 //
// *************************************** //

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContent></HomeContent>
  </Layout>
)

export default IndexPage
