import { reviews } from '@/lib/site-config';

export function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="section-shell">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">Client notes</p>
            <h2>Care that people return to.</h2>
          </div>
          <p>Kind words from Sculpture Beauty Studio clients in Austin.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <figure className="review-card" key={review.name}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
