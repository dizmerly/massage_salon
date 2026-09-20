'use client';

import { siteConfig } from '@/lib/site-config';

export function ContactForm() {
  return (
    <form className="contact-form" action={siteConfig.formspreeEndpoint} method="POST">
      <input type="hidden" name="_subject" value="New Sculpture Beauty Studio website inquiry" />
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
    </form>
  );
}
