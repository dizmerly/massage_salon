import { siteConfig, sitePath } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="wordmark footer-wordmark" href={sitePath('/')}>
          Sculpture <span>beauty studio</span>
        </a>
        <p>Personalized massage and esthetic care in Austin, Texas.</p>
      </div>
      <div className="footer-links">
        <a href={sitePath('/salon/')}>Salon</a>
        <a href={sitePath('/booking/')}>Book an appointment</a>
        <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <div className="footer-contact">
        <a href={siteConfig.phoneLink}>{siteConfig.phoneDisplay}</a>
        <p>{siteConfig.address}</p>
      </div>
    </footer>
  );
}
