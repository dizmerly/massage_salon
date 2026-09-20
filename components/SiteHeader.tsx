'use client';

import { useState } from 'react';
import { sitePath } from '@/lib/site-config';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href={sitePath('/')} aria-label="Sculpture Beauty Studio home">
        Sculpture <span>beauty studio</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href={sitePath('/')}>Home</a>
        <a href={sitePath('/salon/')}>Salon</a>
        <a href={sitePath('/booking/')}>Booking</a>
      </nav>
      <a className="button button-small desktop-book" href={sitePath('/booking/')}>Book now</a>
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
        <a href={sitePath('/')} onClick={() => setOpen(false)}>Home</a>
        <a href={sitePath('/salon/')} onClick={() => setOpen(false)}>Salon</a>
        <a href={sitePath('/booking/')} onClick={() => setOpen(false)}>Booking</a>
      </nav>
    </header>
  );
}
