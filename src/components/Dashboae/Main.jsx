import React from 'react'
import Hero from './Hero'
import VideoGrid from './VideoGrid'
import RightBar from './RightBar'

function Main() {
  return (
    <div className='flex flex-col  xl:flex-row gap-16'>
      <div>
      <Hero/>
      <VideoGrid/>
      </div>

      <div>
        <RightBar/>
      </div>
    </div>
  )
}

export default Main