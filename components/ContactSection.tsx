import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have a question before you book?</h2>
          <p>Share what you are looking for and Lyubov will help you choose the right treatment.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
