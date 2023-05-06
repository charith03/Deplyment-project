import React from "react"
import Heading from "../Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
