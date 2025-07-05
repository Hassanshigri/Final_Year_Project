// import { clerkMiddleware } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// export default clerkMiddleware({
//   publicRoutes: [
//     '/',
//     '/login',
//     '/login#*', // Add hash route pattern
//     '/signup',
//     '/signup#*',
//     '/sso-callback(.*)',
//     '/api/webhook/clerk'
//   ],
//   async afterAuth(auth, req) {
//     const { userId } = auth;
//     const pathname = req.nextUrl.pathname;
//     const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup');

//     if (userId && isAuthPage) {
//       return NextResponse.redirect(new URL('/chat', req.url));
//     }

//     return NextResponse.next();
//   },
// });

// export const config = {
//   matcher: ['/((?!_next|favicon.ico|assets|fonts|images|.*\\..*).*)'],
// };


import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware({
  publicRoutes: [
    '/',                   // Public homepage
    '/login(.*)',          // ✅ Allow /login and all nested routes
    '/signup(.*)',         // ✅ Allow /signup and all nested routes
    '/sso-callback(.*)',   // For social auth redirects
    '/api/webhook/clerk'   // Webhooks
  ],

  async afterAuth(auth, req) {
    const { userId } = auth;
    const pathname = req.nextUrl.pathname;

    // Redirect logged-in users away from login/signup pages
    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup');
    if (userId && isAuthPage) {
      return NextResponse.redirect(new URL('/chat', req.url));
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!_next|favicon.ico|assets|fonts|images|.*\\..*).*)'],
};
