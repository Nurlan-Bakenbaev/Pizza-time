import React from "react";
import styles from ".././styles/Footer.module.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  function submitData(click) {
    click.preventDefault();
    console.log(email);
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <h3 className={styles.followUs}>Follow us on </h3>
      </div>
      <div className={styles.footer__social}>
        <div >
          
          <Link target="blank" to={"https://www.facebook.com/"}>
            <FacebookIcon />
          </Link>
          <Link target="blank" to={"https://www.instagram.com/"}>
            <InstagramIcon />
          </Link>
          <Link target="blank" to={"https://www.linkedin.com/"}>
            <LinkedInIcon />
          </Link>
        </div>
        <form>
          <label
          className={styles.news}
           htmlFor="news">Subscribe for news</label>
          <div>
            <input
              placeholder="@email.com"
              id="news"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={submitData}>Submit</button>
          </div>
        </form>
      </div>
      <p>
        "All used Images and Videos are the property of their respective owners"
        This is Non-commerce website
      </p>
    </footer>
  );
};

export default Footer;
