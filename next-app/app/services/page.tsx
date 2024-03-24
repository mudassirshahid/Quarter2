import React from 'react'
import ClassicMusicPage from './classic-music/page'

function ServicePage() {
  return (
    <div className='flex flex-wrap justify-center flex-col text-centerh-auto md:h-[10rem] w-full rounded-md items-center relative overflow-hidden mx-auto py-10 md-py-0'>
      Service Page
      <ClassicMusicPage 
      title="ClassicMusicPageInner"
      para="some text"
      showH3={false}
      />
    </div>
  )
}

export default ServicePage
