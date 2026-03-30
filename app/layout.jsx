import Navigation from '../components/Navigation';
import Cursor from '../components/Cursor';
import ClientScripts from '../components/ClientScripts';
import { Space_Mono, Syne } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
});

export const metadata = {
  title: 'Raheel Hosmani — AI/ML Engineer',
  description: 'Portfolio describing experiments, work and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${syne.variable}`}>
      <body>
        <Cursor />
        <Navigation />
        {children}
        <footer>
          <div className="footer-left">© 2026 Raheel Hosmani — Hubli, Karnataka, India</div>
          <div className="footer-right">Built with intent · <span>No templates used</span></div>
        </footer>
        <ClientScripts />
      </body>
    </html>
  );
}
