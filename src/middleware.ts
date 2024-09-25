/*
 * https://www.dhiwise.com/post/implementing-next-js-protected-routes-a-step-by-step-guid
 */

// // import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server';

// export async function middleware(req) {
//   const token = 'await getToken({ req });'

//   const url = req.nextUrl.pathname;

//   // Definir rotas públicas
//   const publicRoutes = ['/login', '/register'];

//   // Se a rota for pública, permitir o acesso
//   if (publicRoutes.includes(url)) {
//     return NextResponse.next();
//   }

//   // Verificar se o usuário está autenticado
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   // Logica para rotas protegidas
//   const protectedRoutes = [
//     { path: '/admin', roles: ['admin'] },
//     { path: '/dashboard', roles: ['admin', 'user'] },
//   ];

//   const route = protectedRoutes.find(route => url.startsWith(route.path));

//   if (route && !route.roles.includes(token?.role)) {
//     return NextResponse.redirect(new URL('/403', req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/', '/dashboard', '/admin/:path*'],
// };

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const url = req.nextUrl.pathname;

  // Chamada para uma API que retorna as rotas protegidas e suas permissões
  const protectedRoutesResponse = await fetch(
    "https://sua-api.com/protected-routes",
    {
      headers: {
        Authorization: `Bearer ${token?.accessToken}`, // Caso precise de autenticação
      },
    },
  );

  if (!protectedRoutesResponse.ok) {
    return NextResponse.redirect(new URL("/error", req.url));
  }

  const protectedRoutes = await protectedRoutesResponse.json();

  // Verifica se a rota acessada está nas rotas protegidas
  const route = protectedRoutes.find((route) => url.startsWith(route.path));

  if (route && !route.roles.includes(token?.role)) {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/admin/:path*"],
};
