'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sitePath } from '@/lib/site-config';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href={sitePath('/')} aria-label="Sculpture Beauty Studio home">
        Sculpture <span>beauty studio</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href={sitePath('/')}>Home</Link>
        <Link href={sitePath('/salon/')}>Salon</Link>
        <Link href={sitePath('/booking/')}>Booking</Link>
      </nav>
      <Link className="button button-small desktop-book" href={sitePath('/booking/')}>Book now</Link>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
      </button>
      <nav className={`mobile-nav ${open ? 'is-open' : ''}`} id="mobile-menu" aria-label="Mobile navigation">
        <Link href={sitePath('/')} onClick={() => setOpen(false)}>Home</Link>
        <Link href={sitePath('/salon/')} onClick={() => setOpen(false)}>Salon</Link>
        <Link href={sitePath('/booking/')} onClick={() => setOpen(false)}>Booking</Link>
      </nav>
    </header>
  );
}
