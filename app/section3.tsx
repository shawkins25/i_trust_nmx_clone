import classes from "./section3.module.css";
import Image from "next/image";
import img from "../public/proviable-group-shot.webp";
import becka_img from "../public/becka_img_2.webp";
import becka_signature from "../public/becka_signature.png";
import Link from "next/link";

const Section3 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.section1}>
        <h2>Product Spotlight</h2>
        <div className={classes.proviable_img_container}>
          <Image
            className={classes.proviable_img}
            src={img}
            alt={`Image of of Proviable® products`}
            fill
            priority={false}
          />
        </div>
        <Link
          className={classes.button}
          href="https://www.proviable.com/"
          target="_blank"
          aria-label="Learn More About Proviable®"
        >
          Learn More About Proviable<sup>®</sup>
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
              Proviable<sup>®</sup> is a dependable option in our practice for
              supporting digestive health.
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
