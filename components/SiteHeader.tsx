'use client';

import Link from 'next/link';
import { useState } from 'react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Sculpture Beauty Studio home">
        Sculpture <span>beauty studio</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/salon">Salon</Link>
        <Link href="/booking">Booking</Link>
      </nav>
      <Link className="button button-small desktop-book" href="/booking">Book now</Link>
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
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/salon" onClick={() => setOpen(false)}>Salon</Link>
        <Link href="/booking" onClick={() => setOpen(false)}>Booking</Link>
      </nav>
    </header>
  );
}
