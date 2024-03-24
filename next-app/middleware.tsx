import { NextResponse } from "next/server";

function middleware(request:any) {
    console.log("middleware Test");

    // Every page Redirect to login page use below statement

    // if (request.nextUrl.pathname!="/login") {
        return NextResponse.redirect(new URL("/login",request.url))
    // }
    // console.log(request.nextUrl.pathname);
    
}

 // For specific page Redirect to login page use below statement

//  export const config ={
//     matcher: ["/about/:path*", "/studentlist/:path*"]  //  /about means about page and /about/:path* means about page as well as all inner pages of about
//  }

//  Task to redirect only about nested route onto login page not about main page  

export const config ={
    matcher: ["/about/aboutcollege"]  //  /about means about page and /about/:path* means about page as well as all inner pages of about
 }
export default middleware


// Filename should be middleware.tsx and it's always outside the app folder
// We use middleware for authentication or is user loggedin or not and redirect user to specific page
// middleware code execute serverside and you can see this in your server file like where you run your project npm run dev
// middleware execute whenever you access any route
// The below console not show in your browser it's show in serverside
// If you load entire site then middleware execute time = your total routes 

// Every page Redirect to login page use below statement

// return NextResponse.redirect(new URL("/login",request.url))
// But after this statement we see error on webpage and the error would be below:

// This page isn’t workinglocalhost redirected you too many times.
// Try deleting your cookies.
// ERR_TOO_MANY_REDIRECTS

// For handling above error we apply if condition and write our statement in it 

// if (request.nextUrl.pathname!="/login") {
//     return NextResponse.redirect(new URL("/login",request.url))
// }


// For specific page Redirect to login page use below statement

// export const config ={
//     matcher: "/about/:path*"  //  /about means about page and /about/:path* means about page as well as all inner pages of about
//  }

// For multiple pages wrap it in array and use comma to seperated and add different urls

// export const config ={
//     matcher: ["/about/:path*", "/studentlist/:path*"]  //  /about means about page and /about/:path* means about page as well as all inner pages of about
//  }

// export default middleware