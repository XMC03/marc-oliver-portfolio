import contactImg from '../assets/contact.png';

export default function Contact() {
  return (
    <section id="contact" className="container contact-layout">
      <h2>Contact</h2>
      <p>Feel free to reach out via email.</p>
      <a className="email-block" href="mailto:cataniag.258053@sjdelmonte.sti.edu.ph">
        ✉ &nbsp; cataniag.258053@sjdelmonte.sti.edu.ph
      </a>
      <img src={contactImg} className="contact-img" alt="Contact" />
    </section>
  );
}
