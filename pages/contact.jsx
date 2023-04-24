import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">Wohnhaft in Wien</p>
            <ul className="contact-links">
              <li className="contact-item">Email: dontcontactme@gmail.com</li>
              <li className="contact-item">Phone: +436644999827</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
