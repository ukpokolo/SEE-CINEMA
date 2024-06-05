import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewIn from '../Components/NewIn/NewIn'
import WhatsOn from '../Components/WhatsOn/WhatsOn'
import ComingSoon from '../Components/ComingSoon/ComingSoon'

function Home() {
  return (
    <div>
        <Hero/>
        <NewIn/>
        <WhatsOn/>
        <ComingSoon/>
    </div>
  )
}

export default Home