"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {

  // useState
  const [name, setName] = useState("Mudassir");
  const [isFirstValue, setIsFirstValue] = useState(true);
  
  const updateName = () => {
    setIsFirstValue(!isFirstValue); // Toggle between true and false
    setName(isFirstValue ? "Mudassir Shahid" : "Mudassir"); // Set name based on toggle
  }

  // Inner Component
  const InnerComp = () => {
    return (
      <main>
      <h2 className="text-center bg-emerald-500 text-3xl p-3 text-black">{name}</h2>
     <button onClick={() => updateName()} className="flex mx-auto py-3 bg-slate-600 my-5 p-4 rounded-md">Click to updateName</button>
     </main>
    )
  } 

  // Store Dynamic value in variable 
  let data = "React Framework"

  // Alert function
  const tech = (item:string) => {
    alert(item)
  }

  // useRouter for navigation
  const router = useRouter()

  return (
    <>
      <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black">NextJS {data}</h1>
      <button onClick={() => tech("Welcome to Next App")} className="flex mx-auto py-3 bg-slate-600 my-5 p-4 rounded-md">Click for alert</button>
      <button onClick={() => router.push("/about")} className="flex mx-auto my-2"> Go to About Page</button>
      <InnerComp />
    </>
  );
}
