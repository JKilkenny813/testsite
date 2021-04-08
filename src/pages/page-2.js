import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to the Labber Security Blog</h1>
    <p>
    
    
     4/8/2021 J.Kilkenny
  
  In this blog we are to going to attempt to answer a few questions about dApp use for decentralized or autonomous organizations.
  
  First off what is a dApp? A dApp is a decentralized application. 
  
1.	What are the biggest practical barriers to dApps adoption?
  
  One of the biggest barriers to dApps adoption is lack of knowledge or understanding around how easy and secure these applications are to create and deploy. For example, 
  This blog was created in about 2 hours. There was no background knowledge on this previously and therefore I utilized what I was able to find from the resources available.
  Through a bit of research I came across another blog that covers some of the main issues for dApps in regards to adoption and usage. Find that blog here 
   <a href="https://hackernoon.com/decentralised-applications-and-the-problem-with-adoption-9cfdaa868b2b/" title="The Decentralized Application Adoption Problem">The Decentralized Application Adoption Problem</a>
  
2.	What are the security advantages and disadvantages of dapps?
Here are some of the advantages of utilizing a dApp; Simple to develop, more control, safe data, open source, transparent data, less downtime, data is never lost, can’t be blocked, cost reduction.
 Disadvantages are dAps infra is harder to maintain and develop, traditional security does not work, lack of user experience, slow speeds.
 Particularly speaking of traditional security dApps dont have a single point of failure which means more resistance to attacks, (every computer on the system would need to be taken down
 in order to cause a point of failure in the system. The negative to this is that traditional security solutions dont work and a dApp specific solution needs to be implemented. Valid Networks’ blockchain security platform for dApps does just that.
  
  Here is another link to a blog that covers the advantages and disadvantages to dApps.
     <a href="https://valid.network/post/decentralized-applications-the-good-the-bad-and-why-should-enterprises-care" title="Decentralized Applications: The good, the bad, and why should enterprises care?">Decentralized Applications: The good, the bad, and why should enterprises care?</a>
  
  
3.	How might the role of a system administrator change in an organization that made use of dapps?
  
  Some of the system administrator tasks may be off loaded by being automated so the role itself may become more diversified and look more like a system engineer. 
  The way that system admins handle security should also be impacted as they will no longer be able to utilize traditional methods of security. They can however enforce
  static separation of duties by configuring pre-requisite conditions.
  Here’s a document that covers different roles within dApps    <a href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.84.8160&rep=rep1&type=pdf" 
  title="Decentralized User Role Assignment for Webbased Intranets">Decentralized User Role Assignment for Webbased Intranets</a>
  
  
4.	Is it possible to manage dApps for a team of users like we might with traditional SaaS business applications? 
  If so, how might it be done? If not, what are the implications for organizational dapp use?
Dealing with browser plugins, extensions or entirely new and unfamiliar crypto-enabled browsers, along with the
  steep learning curve of private key security and backup phrases, is too high a barrier for the vast majority of users, especially those using a mobile device as the vast majority 
  of users utilize mobile devices to access the internet. With that said it is possible to manage a dApp for a team of users but deciding on the way to approach the system account 
  depends on the mission and goal of the users and the application. 
  Here’s a link to a blog that discusses how they utilize four different ways of managing user accounts based on need. 
    <a href="https://blog.wetrust.io/designing-user-account-systems-in-ethereum-apps-f824fe625412" title="Designing user account systems in Ethereum apps">Designing user account systems in Ethereum apps</a>
  

    </p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
