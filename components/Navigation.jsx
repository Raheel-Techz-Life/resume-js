'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className="nav-logo">Rhlz<span className="status-dot">Available for new roles</span></Link>
      <button 
        className={`nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span><span></span><span></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link href="/projects" className={pathname === '/projects' ? 'active' : ''} onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link href="/experience" className={pathname === '/experience' ? 'active' : ''} onClick={() => setIsOpen(false)}>Experience</Link></li>
        <li><Link href="/achievements" className={pathname === '/achievements' ? 'active' : ''} onClick={() => setIsOpen(false)}>Awards</Link></li>
        <li><Link href="/work" className={pathname === '/work' ? 'active' : ''} onClick={() => setIsOpen(false)}>Work</Link></li>
        <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
