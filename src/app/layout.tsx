import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { HeroHeader } from '@/components/hero8-header';


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
      
      {/* On wrappe le header dans une div fixe */}
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <HeroHeader />
      </div>

      {/* Décalage du contenu sous le header fixe */}
      <main className="pt-16">
        {children}
      </main>

      {modal}
      <Footer />
    </ThemeProvider>
  </body>
</html>
  );
}
