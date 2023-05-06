import React from "react"
import Heading from "../Heading"
import "./recent1.css"
import RecentCard1 from "./RecentCard1"

const Recent1 = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.' />
          <RecentCard1 />
        </div>
      </section>
    </>
  )
}

export default Recent1
