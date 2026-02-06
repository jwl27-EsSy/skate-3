'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav-scrolled' : 'nav-transparent'}>
      <div className="nav-container-flex">
        <div className="nav-logo-small">
          <h1>UW SKATECLUB</h1>
        </div>
        <ul className="nav-links">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="#">EVENTS</Link></li>
          <li><Link href="/gallery">GALLERY</Link></li>
        </ul>
      </div>
    </nav>
  );
}
