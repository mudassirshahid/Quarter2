//For Common Layout
'use client'
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To get current pathname Here we use this for conditional layout

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // usePathname To get current pathname Here we use this for conditional layout
  const pathName = usePathname(); //using this see pathname
  console.log(pathName); //see pathname in console
  
  const loginArr = ["/login/loginteacher"]
  return (
    <>
    <div>
    <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black mb-2"> Common Layout for Login screen</h1>
    {/* Conditional Layout  */}
    {
      // pathName !== "/login/loginteacher" //first way
      //Second way using array //Array method helpful when hide content on multiple pathnames 
      !loginArr.includes(pathName) ? 
      <ul className="flex justify-center gap-9 my-5">
        <li className="hover:text-sky-500"><Link href={'/login'}>Login Main</Link></li>
        <li className="hover:text-sky-500"><Link href={'/login/loginstudent'}>Student Login</Link></li>
        <li className="hover:text-sky-500"><Link href={'/login/loginteacher'}>Teacher Login</Link></li>
    </ul>
    :     <Link href={'/login'} className="flex justify-center mx-auto my-4 hover:text-black bg-slate-500 w-40 p-3 rounded-md">Go to Login</Link>

    }
    
    </div>
    {children}
    <Link href={'/'} className="flex justify-center mx-auto my-4 hover:text-black bg-slate-500 w-40 p-3 rounded-md">Go to Home page</Link>
    </>
  );
}
