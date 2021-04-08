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
  
1.	What are the biggest practical barriers to dApps adoption?
  
  One of the biggest barriers to dApps adoption is lack of knowledge or understanding arround how easy and secure these applications are to create and deploy. For example, 
  this blog was crearted in about 2 hours. There was no background knowledge on this previously and therefore I utilized what I was able to find from the resources available.
  Through a bit of research I came across another blog that covers some of the main issues for dApps in regards to adoption and usage. Find that blog here 
  <p><a href="https://hackernoon.com/decentralised-applications-and-the-problem-with-adoption-9cfdaa868b2b/">The Decentralized Application Adoption Problem</a></p>.
 
  
2.	What are the security advantages and disadvantages of dapps?
Here are some of the advantages of utilizing a dApp; Simple to develop, More control, safe data, open source, transparent data, less downtime, data is never lost, cant be blocked, cost reduction.
 Disadvantages are dAps infra is harder to maintain and develop, traditional secuirty does not work, lack of user experience, slow speeds.
 Particularly speaking of tradional secuirty dApps dont have a single point of failure which means more resistnace to attacks, (every computer on the system would need to be taken down
 in order to cause a point of failure in the system. The negative to this is that traditional secuirty solutions dont work and a dApp specific solution needs to be implemented.Valid Networks’ blockchain security platform for dApps does just that.
  
  Here is another link to a blog that covers the advantages and disadvantages to dApps.
   <p><a href="https://valid.network/post/decentralized-applications-the-good-the-bad-and-why-should-enterprises-care"> Decentralized Applications: The good, the bad, and why should enterprises care?</a></p>.
 
  
3.	How might the role of a system administrator change in an organization that made use of dapps?
  
  Some of the system administrator tasks may be off loaded by being automated so the role its self may become more diversified and look more like a system engineer. 
  
  
4.	Is it possible to manage dApps for a team of users like we might with traditional SaaS business applications? 
  If so, how might it be done? If not, what are the implications for organizational dapp use?

  
  
  /p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


