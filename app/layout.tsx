import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Kazi Miftahul Hoque | Portfolio',
  description: 'Graphic Designer & Mechanical Engineering Student',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
