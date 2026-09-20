import { siteConfig, sitePath } from '@/lib/site-config';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="wordmark footer-wordmark" href={sitePath('/')}>
          Sculpture <span>beauty studio</span>
        </Link>
        <p>Personalized massage and esthetic care in Austin, Texas.</p>
      </div>
      <div className="footer-links">
        <Link href={sitePath('/salon/')}>Salon</Link>
        <Link href={sitePath('/booking/')}>Book an appointment</Link>
        <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <div className="footer-contact">
        <a href={siteConfig.phoneLink}>{siteConfig.phoneDisplay}</a>
        <p>{siteConfig.address}</p>
      </div>
    </footer>
  );
}
