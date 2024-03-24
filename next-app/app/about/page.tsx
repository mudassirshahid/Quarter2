"use client"
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter()
  return (
    <>
    <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black">About Page</h1>
    <button onClick={() => router.push("/services")} className="flex mx-auto py-3"> Go to Services Page</button>
    </>
  );
}
