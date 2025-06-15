import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { HeroHeader } from '@/components/hero8-header';
import FloatingSocialButtons from '@/components/FloatingSocialButtons';

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
  metadataBase: new URL('https://data-fc.vercel.app'),
  title: "DATA FC",
  description: "DATA FC : VOTRE PARTENAIRE STRATÉGIQUE POUR UNE CROISSANCE DURABLE",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/", // يعتمد على metadataBase
    siteName: "DATA FC",
    title: "DATA FC – Conseil, Formation & Outsourcing",
    description: "Cabinet marocain expert en recrutement, formation et externalisation.",
    images: [{ url: "/logo_datafc.jpg", width: 1200, height: 630, alt: "DATA FC – Conseil & Formation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DATA FC",
    description: "Recrutement, formation, outsourcing au Maroc",
    images: ["/logo_datafc.jpg"],
  }
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
          <FloatingSocialButtons />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
