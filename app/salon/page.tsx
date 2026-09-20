import Image from 'next/image';
import Link from 'next/link';
import { ContactSection } from '@/components/ContactSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata = {
  title: 'The Salon | Sculpture Beauty Studio',
  description: 'Meet Lyubov Yuzyuk and explore Sculpture Beauty Studio in Austin, Texas.',
};

export default function SalonPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-shell">
        <div>
          <p className="eyebrow">The studio</p>
          <h1>A personal approach to feeling your best.</h1>
        </div>
        <p>Located in Austin, Sculpture Beauty Studio is a private space for focused skin care, facial massage, and restorative bodywork.</p>
      </section>

      <section className="salon-gallery section-shell">
        <div className="gallery-tall"><Image src="/images/ownerimage.webp" alt="Lyubov Yuzyuk in her Austin treatment studio" fill priority sizes="(max-width: 760px) 92vw, 42vw" /></div>
        <div className="gallery-stack">
          <div><Image src="/images/showcaseImage2.webp" alt="Lyubov preparing for a personalized treatment" fill sizes="(max-width: 760px) 92vw, 36vw" /></div>
          <p>Licensed esthetician<br />Massage therapist<br />Independent studio owner</p>
        </div>
      </section>

      <section className="philosophy section-shell">
        <p className="eyebrow">The philosophy</p>
        <div>
          <h2>Care is most effective when it begins with attention.</h2>
          <div className="two-column-copy">
            <p>Lyubov takes time to understand your goals, comfort, and day-to-day needs before choosing a treatment approach. That conversation helps make every appointment both effective and deeply restorative.</p>
            <p>The studio is intentionally quiet and personal, with one-on-one care from arrival through the end of your service. There is no rushed handoff—just thoughtful work, a calming pace, and space to breathe.</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell process-grid">
          <div className="process-image"><Image src="/images/showcaseImage3.webp" alt="A professional esthetic treatment in progress" fill sizes="(max-width: 760px) 92vw, 48vw" /></div>
          <div className="process-copy">
            <p className="eyebrow">What to expect</p>
            <h2>Your visit, at your pace.</h2>
            <ol>
              <li><span>01</span><div><h3>Arrive and settle in</h3><p>Begin with a conversation about your goals and how you are feeling.</p></div></li>
              <li><span>02</span><div><h3>Receive tailored care</h3><p>Your service is adjusted to your needs, comfort, and preferences.</p></div></li>
              <li><span>03</span><div><h3>Leave with a plan</h3><p>Finish with thoughtful guidance for supporting your results at home.</p></div></li>
            </ol>
            <Link className="button" href="/booking">Plan your visit</Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
