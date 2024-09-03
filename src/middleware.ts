// import { NextResponse } from "next/server";

// const roleAccessMap = {
//   admin: [
//     "/",
//     "/companies",
//     "/companies/[id]",
//     "/tickets",
//     "/tickets/[id]",
//     "/team",
//     "/payments",
//     "/payments/[id]",
//     "/analytics",
//   ],
//   cs: [
//     "/",
//     "/companies",
//     "/companies/[id]",
//     "/tickets",
//     "/tickets/[id]",
//     "/team",
//   ],
//   developer: [
//     "/",
//     "/projects",
//     "/projects/[id]",
//     "/account",
//     "/company",
//     "/tickets",
//     "/tickets/[id]",
//     "/team",
//   ],
//   visitor: ["/", "/projects", "/account", "/company", "/support"],
// };

// function doesRoleHaveAccessToURL(role, url) {
//   const accessibleRoutes = roleAccessMap[role] || [];
//   return accessibleRoutes.some((route) => {
//     // Create a regex from the route by replacing dynamic segments
//     const regexPattern = route.replace(/\[.*?\]/g, "[^/]+").replace("/", "\\/");
//     const regex = new RegExp(`^${regexPattern}$`);
//     return regex.test(url);
//   });
// }

// export default function withAuth(function middleware(req) {
//   // Redirect to login page if there is no accessible token
//   if (!req.nextauth.token) {
//     return NextResponse.redirect("/auth/login");
//   }

//   const role = req.nextauth.token.role;
//   let haveAccess = doesRoleHaveAccessToURL(role, req.nextUrl.pathname);
//   if (!haveAccess) {
//     // Redirect to login page if user has no access to that particular page
//     return NextResponse.rewrite(new URL("/403", req.url));
//   }

//   // Allow
// });
