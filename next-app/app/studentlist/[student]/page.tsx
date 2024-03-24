// Dynamic Routing
"use client"

import Link from "next/link";

function student({params}:any) {
    console.log(params);
    
  return (
    <div className="">
      <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black">Student Details</h1>
      <div className="flex flex-col justify-center text-center">
      <h3>Name : {params.student}</h3>
      <Link href={'/studentlist'} className="text-blue-700">Go Back</Link>
      </div>
    </div>
  )
}

export default student
