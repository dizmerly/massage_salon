import Image from 'next/image';
import Link from 'next/link';
import { ContactSection } from '@/components/ContactSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { services } from '@/lib/site-config';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Massage · Skin care · Austin</p>
          <h1>Care that brings you back to yourself.</h1>
          <p className="hero-intro">
            Personalized massage and esthetic treatments by Lyubov Yuzyuk, created to help you feel rested, radiant, and at ease.
          </p>
          <div className="button-row">
            <Link className="button" href="/booking">Book an appointment</Link>
            <Link className="text-link" href="/salon">Explore the studio <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image className="hero-image" src="/images/showcaseImage.webp" alt="A facial treatment at Sculpture Beauty Studio" fill priority sizes="(max-width: 760px) 92vw, 48vw" />
          <p className="image-note">A quiet space for thoughtful care</p>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-shell intro-grid">
          <p className="eyebrow">You’re in caring hands</p>
          <div>
            <h2>Beauty and bodywork, shaped around you.</h2>
            <p>Every visit begins with listening. Lyubov pairs skilled technique with an unhurried, personal approach so each treatment responds to what your skin and body need that day.</p>
          </div>
        </div>
      </section>

      <section className="services-section section-shell">
        <div className="section-heading">
          <p className="eyebrow">Treatments</p>
          <h2>Simple rituals.<br />Noticeable renewal.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <p className="service-duration">{service.duration}</p>
              <Link className="round-link" href="/booking" aria-label={`Book ${service.title}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="owner-story section-shell">
        <div className="owner-image-wrap">
          <Image src="/images/ownerimage.webp" alt="Lyubov Yuzyuk providing an esthetic treatment" fill sizes="(max-width: 760px) 92vw, 40vw" />
        </div>
        <div className="owner-copy">
          <p className="eyebrow">Meet Lyubov</p>
          <h2>Skilled hands. A thoughtful point of view.</h2>
          <p>Lyubov Yuzyuk is a massage therapist and esthetician who believes care should feel personal, restorative, and never rushed. Her private Austin studio is a welcoming place to pause and reconnect.</p>
          <Link className="text-link" href="/salon">About the studio <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="media-section section-shell">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Inside the studio</p>
          <h2>See the care behind each treatment.</h2>
        </div>
        <div className="media-grid">
          <article className="video-placeholder">
            <span>01</span>
            <div className="play-mark" aria-hidden="true">▶</div>
            <p>Video coming soon</p>
          </article>
          <article className="video-placeholder peach-card">
            <span>02</span>
            <div className="play-mark" aria-hidden="true">▶</div>
            <p>Video coming soon</p>
          </article>
        </div>
      </section>

      <section className="booking-banner">
        <div className="section-shell booking-banner-inner">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Make space for yourself.</h2>
          </div>
          <Link className="button button-light" href="/booking">View appointments</Link>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
