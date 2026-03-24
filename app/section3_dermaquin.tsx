import classes from "./section3_dermaquin.module.css";
import Image from "next/image";
import img from "../public/dermaquin-group-shot_centered.webp";
import becka_img from "../public/becka_img_2.webp";
import becka_signature from "../public/becka_signature.png";
import Link from "next/link";

const Section3 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.section1}>
        <h2>Product Spotlight</h2>
        <div className={classes.dermaquin_img_container}>
          <Image
            className={classes.dermaquin_img}
            src={img}
            alt={`Image of of Dermaquin® products`}
            fill
            priority={false}
          />
        </div>
        <div className={classes.sign_in_txt}>Sign-in to your account on the MyNutramax dashboard for exclusive Dermaquin<sup>®</sup> content.</div>
        <Link
          className={classes.button}
          href="https://www.mynutramax.com/dashboard/?#resources:dermaquin"
          target="_blank"
          aria-label="Learn More About Dermaquin®"
        >
          Learn More About Dermaquin<sup>®</sup>
        </Link>
      </div>
      <div className={classes.section2}>
        <div className={classes.becka_img_container}>
          <Image
            className={classes.becka_img}
            alt={`Image of of Becka Book, CVT`}
            src={becka_img}
            fill
            priority={false}
          />
        </div>
        <div className={classes.quote_and_signature_container}>
          <div className={classes.quote}>
            <span className={classes.openQuote}>&ldquo;</span>
            <h2>
              <span className={classes.openQuote_mobile}>&ldquo;</span>
              I’ve found Dermaquin<sup>®</sup> to be an excellent option for pets needing skin health support. The combination of ingredients really helps the skin’s natural defenses.
              <span className={classes.closeQuote_mobile}>&rdquo;</span>
            </h2>
            <span className={classes.closeQuote}>&rdquo;</span>
          </div>
          <div className={classes.signature_container}>
            <p>Becka Book, CVT</p>
            <p>Apple Grove Veterinary Clinic</p>
            <div className={classes.becka_signature_img_container}>
              <Image
                className={classes.becka_signature_img}
                alt={`Image of of Becka Book, CVT's signature`}
                src={becka_signature}
                fill
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
