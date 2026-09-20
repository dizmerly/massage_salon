'use client';

import { useState } from 'react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Sculpture Beauty Studio home">
        Sculpture <span>beauty studio</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/salon">Salon</a>
        <a href="/booking">Booking</a>
      </nav>
      <a className="button button-small desktop-book" href="/booking">Book now</a>
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
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/salon" onClick={() => setOpen(false)}>Salon</a>
        <a href="/booking" onClick={() => setOpen(false)}>Booking</a>
      </nav>
    </header>
  );
}
