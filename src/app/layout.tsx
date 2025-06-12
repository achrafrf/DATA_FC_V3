import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { HeroHeader } from '@/components/hero8-header';
import { BackToTopButton } from '@/components/BackToTopButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// 👇 العنوان الذي يظهر في التبويب
export const metadata = {
  title: "DATA FC",
  description: "وصف اختياري للموقع",
  icons: {
  icon: "/favicon.ico",
},
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
<meta name="google-site-verification" content="mDKUd3cCjyEURQvsM0lhM3qR-K4HnXqNsM0WG8ggGOs" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="fixed top-0 left-0 w-full h-16 z-50">
            <HeroHeader />
          </div>
          <main className="pt-16">
            {children}
          </main>
          {modal}
          <BackToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
