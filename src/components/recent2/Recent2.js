import React from "react"
import Heading from "../Heading"
import "./recent2.css"
import RecentCard2 from "./RecentCard2"

const Recent2 = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.' />
          <RecentCard2 />
        </div>
      </section>
    </>
  )
}

export default Recent2
