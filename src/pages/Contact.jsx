import "../css/Contact.css";

const Contact = () => {
   const handleClick = () => {
    alert("Message sent successfully!");
  };
  return (
    <>
    <div className="container mt-5">
      <div className="hero-contact">
        <h1>Contact Us</h1>
        <p>Have questions or want to collaborate? Send me a message!</p>
        
        <form className="contact-form mt-3">
          <input type="text" placeholder="Your Name" className="form-control mb-3" />
          <input type="email" placeholder="Your Email" className="form-control mb-3" />
          <textarea placeholder="Your Message" rows="5" className="form-control mb-3"></textarea>
          <button type="submit" onClick={handleClick}>Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
