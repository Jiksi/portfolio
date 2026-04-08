export function ContactSection() {
  return (
    <section id="contact" className="contact animate-fade-up">
      <div className="section-header">
        <h2 className="section-title">Initiate Contact</h2>
        <span className="section-meta">[03]</span>
      </div>
      
      <div className="contact-content">
        <p className="contact-text">Currently accepting new opportunities for Q3.</p>
        <a href="mailto:hello@engineer.com" className="contact-email">
          hello@engineer.com
          <span className="contact-email-underline" />
        </a>
      </div>
    </section>
  );
}
