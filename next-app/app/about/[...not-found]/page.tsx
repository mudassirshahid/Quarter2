import Link from "next/link"

function NotFoundPage() {
    return (
      <div className="flex flex-col justify-center items-center h-[50rem]">
        <h1 className="text-2xl">404 | About Page Not Found</h1>
        <Link href={'/'} className="text-1xl text-green-600 hover:text-green-400 mt-1 ">Go to HomePage</Link>
      </div>
    )
  }
  
  export default NotFoundPage


// Syntax to create global 404 page filename would be not-found.tsx and make it in root directory app and this is global
// For specific page we make folder in that specific route folder and folder name should be like this [...not-found] instead of not-found you can write anything but [...] this syntax remain same and make file page.tsx in this folder  
// I created 404 page for about
// Usually 404 page only one which is global for all pages but for individual page we can make using this syntax [...not-found] 
