import Link from 'next/link'
import React from 'react'

interface ClassicMusicPageProps {
  title: string;
  para: string;
  showH3?: boolean; // Optional prop to control whether to show h3 element
}

const servicesList = ["Developer", "SEO", "SMM", "UI/UX"]
function ClassicMusicPage({title, para, showH3 = true}: ClassicMusicPageProps) {
  return (
    <>
    <div className='text-center'>
      <Link href={'services/classic-music'} className='text-purple-500'>{title}</Link>
      <p className='text-center'>{para}</p>
      {showH3 &&
      <>
      <div className='flex flex-col gap-5 justify-center items-center mx-auto h-[20rem]'> 
      <h3>Classic Page</h3>
      <ul className='bg-indigo-700 p-6 border rounded-md'>
      {servicesList.map((name, index) => (
        <li key={index}>
          {name}
        </li>
      ))}
      </ul>
      <Link href={'/services'} className="text-blue-700">Go Back</Link>
      </div>
      </>
      } {/* Conditionally render h3 based on showH3 prop */}
    </div>
    </>
  )
}

export default ClassicMusicPage
