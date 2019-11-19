import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Nav from "../components/Navigation/Navigation"

import "./PageStylesheets/index.css"

// Page Components

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav></Nav>
    <h1>Gotta make this home page</h1>
  </Layout>
)

export default IndexPage
