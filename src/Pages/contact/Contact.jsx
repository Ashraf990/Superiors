import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";
function Contact() {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero
        corrupti quam mollitia enim, architecto aliquam. Iure numquam, quo
        cumque rem excepturi totam eaque rerum nam laboriosam,
      </Header>
      <section className="contact">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <a
              href="mailto:an3869292@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/walang47"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+201028020305"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
