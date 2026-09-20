'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/lib/site-config';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website inquiry from ${form.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone')}\n\n${form.get('message')}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone <span>(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="full-field">
          How can Lyubov help?
          <textarea name="message" rows={5} required />
        </label>
      </div>
      <button className="button" type="submit">Send inquiry</button>
      {sent && <p className="form-note" role="status">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
