import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Labber Secuirty Blog </h1>
    <p>Welcome to the Labber Secuirty Blog 
  <break>
  4/8/2021 J.Kilkenny
  
  In this blog we are to going to attempt to answer a few questions about dapp use for decentralized or autonomous organizations.
  
  First off what is a dapp? A dapp is a decentralized application. 
  
1.	What are the biggest practical barriers to dapps adoption?
  
2.	What are the security advantages and disadvantages of dapps?
  
3.	How might the role of a system administrator change in an organization that made use of dapps?
  
4.	Is it possible to manage dapps for a team of users like we might with traditional SaaS business applications? If so, how might it be done? If not, what are the implications for organizational dapp use?

  
  
  /p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
