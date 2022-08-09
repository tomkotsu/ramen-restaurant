import React from "react";
import contactTitle from "../imgs/contact-title.png";
import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";

const Contact = (props) => {
  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper flex flex-col justify-start items-center pt-20 gap-20 pb-20">
        <img src={contactTitle} alt="" className="w-64 h-auto" />
        <div className="address flex flex-col md:flex-row text-white justify-center items-center text-xl">
          <p className="w-[300px] h-[250px] flex justify-center items-center">
            だるまラーメン<br></br>
            阿佐ヶ谷駅<br></br>
            杉並区<br></br>
            東京都<br></br>
            〒999-9999
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.9519746405306!2d139.63602105269214!3d35.703981185798426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2767eb9e92b%3A0xc2d0573363890acc!2sAsagaya%20Station!5e0!3m2!1sen!2suk!4v1660057627011!5m2!1sen!2suk"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contactBtns flex justify-evenly items-center gap-2">
          <a href="mailto:tombinnie@protonmail.com">
            <img src={emailIcon} className="w-20 h-20" />
          </a>
          <a href="#">
            <img src={cvIcon} className="w-20 h-20" />
          </a>
          <a href="https://github.com/tomkotsu" target="_blank">
            <img src={githubIcon} className="w-20 h-20" />
          </a>
          <a href="https://www.linkedin.com/in/tom-binnie/" target="_blank">
            <img src={linkedinIcon} className="w-20 h-20" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
