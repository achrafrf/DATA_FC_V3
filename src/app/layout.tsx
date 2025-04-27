import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { HeroHeader } from '@/components/hero8-header';
import HeroSection from '@/components/hero-section';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: string }; // locale موجود هنا
}>) {
 

  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <HeroHeader />
          <HeroSection />
          {children}
          {modal}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
