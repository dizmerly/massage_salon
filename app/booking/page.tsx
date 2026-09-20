import { ContactSection } from '@/components/ContactSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { services, siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Book an Appointment | Sculpture Beauty Studio',
  description: 'Book a massage or esthetic appointment with Lyubov Yuzyuk in Austin, Texas.',
};

export default function BookingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="booking-hero section-shell">
        <div>
          <p className="eyebrow">Book your visit</p>
          <h1>A little time for you.</h1>
          <p>Choose your service and a time that works for you. Appointments are managed securely through Square.</p>
          <a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Open booking calendar <span aria-hidden="true">↗</span></a>
        </div>
        <aside className="booking-details">
          <p className="eyebrow">Studio details</p>
          <p>{siteConfig.address}</p>
          <a href={siteConfig.phoneLink}>{siteConfig.phoneDisplay}</a>
          <p>Questions about which service to choose? Call or use the contact form below.</p>
        </aside>
      </section>

      <section className="booking-tool section-shell">
        <div className="booking-tool-heading">
          <div>
            <p className="eyebrow">Online appointments</p>
            <h2>Choose your treatment.</h2>
          </div>
          <p>Square may open in a new tab on smaller devices for the easiest booking experience.</p>
        </div>
        <div className="booking-frame-wrap">
          <iframe src={siteConfig.bookingUrl} title="Book an appointment with Sculpture Beauty Studio" loading="lazy" />
          <div className="booking-frame-fallback">
            <p>If the calendar does not appear, open it directly.</p>
            <a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book with Square</a>
          </div>
        </div>
      </section>

      <section className="services-section section-shell booking-services">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Before you book</p>
          <h2>A few treatment options.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <span>{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
              <p className="service-duration">{service.duration}</p>
              <a className="round-link" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" aria-label={`Book ${service.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
