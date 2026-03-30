import Navigation from '../components/Navigation';
import Cursor from '../components/Cursor';
import ClientScripts from '../components/ClientScripts';
import './globals.css';

export const metadata = {
  title: 'Raheel Hosmani — AI/ML Engineer',
  description: 'Portfolio describing experiments, work and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
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
