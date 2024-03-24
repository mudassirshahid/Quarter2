import React from 'react'
import ClassicMusicPage from './classic-music/page'

function ServicePage() {
  return (
    <>
    <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black">Service Page</h1>

    <div className='flex flex-wrap justify-center flex-col text-centerh-auto md:h-[0rem] w-full rounded-md items-center relative overflow-hidden mx-auto py-10 md-py-0'>
      <ClassicMusicPage 
      title="ServicesInner"
      para="some text"
      showH3={false}
      />
    </div>
    </>
  )
}

export default ServicePage
