import Image from 'next/image';
import { ContactSection } from '@/components/ContactSection';
import { ReviewsSection } from '@/components/ReviewsSection';
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

      <section className="salon-content section-shell">
        <div className="editable-copy-block">
          <p className="eyebrow">Studio story</p>
          <h2>A place for your salon story.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this paragraph with the story of Sculpture Beauty Studio, Lyubov’s approach, or what clients can expect when they arrive.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add another paragraph here whenever you are ready to share more.</p>
        </div>

        <div className="editable-media-grid">
          <figure className="editable-photo-block">
            <Image src="/images/showcaseImage3.webp" alt="An esthetic treatment in progress" fill sizes="(max-width: 760px) 92vw, 45vw" />
            <figcaption>Photo container · replace this image anytime</figcaption>
          </figure>
          <div className="editable-photo-placeholder">
            <span>Photo</span>
            <p>Add another studio or treatment image here.</p>
          </div>
        </div>

        <div className="editable-copy-block text-right-block">
          <p className="eyebrow">Your approach</p>
          <h2>Space for another message.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use this section for qualifications, treatment philosophy, product information, or anything clients should know before booking.</p>
        </div>

        <div className="salon-video-grid">
          <article className="video-placeholder"><span>01</span><div className="play-mark" aria-hidden="true">▶</div><p>Add a studio video</p></article>
          <article className="video-placeholder peach-card"><span>02</span><div className="play-mark" aria-hidden="true">▶</div><p>Add a treatment video</p></article>
        </div>

        <div className="salon-booking-link">
          <p>Ready to turn your visit into a little time for yourself?</p>
          <a className="button" href="/booking">Plan your visit</a>
        </div>
      </section>

      <ReviewsSection />

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
