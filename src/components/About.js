import React from "react"
import Back from "./Back"
import Heading from "./Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <h1>About Us - Who We Are? </h1>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' /><br/>
            <br/>
            </div>
            <p>REAL ESTATE Group is reimagining real estate to make it easier to unlock life’s next chapter.<br/>
As the most-visited real estate website in the United States, the website and its affiliates offer customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service.It Home Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their next home purchase.
 Group’s brands, affiliates and subsidiaries include website, website Premier Agent, website Home Loans, website Closing Services, It Homes, Inc. Trulia, Out East, StreetEasy, HotPads, and ShowingTime.</p>
          </div>
          
      </section>
    </>
  )
}

export default About
