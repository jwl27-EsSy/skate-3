'use client';

import Link from 'next/link';
import Image from 'next/image';
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
        <div className="nav-logo-small" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 10
          }}>
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
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
