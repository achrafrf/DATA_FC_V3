// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(['en', 'fr', 'ar']);

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const locale = acceptLanguage.get(req.headers.get('accept-language') || '') || 'en';

  if (
    !pathname.startsWith(`/${locale}`) &&
    !['/en', '/fr', '/ar'].some(prefix => pathname.startsWith(prefix))
  ) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
