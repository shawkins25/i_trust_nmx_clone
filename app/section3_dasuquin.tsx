import classes from "./section3_dasuquin.module.css";
import Image from "next/image";
// import img from "../public/dasuquin-group-shot_centered.webp";
// import becka_img from "../public/becka_img_2.webp";
// import becka_signature from "../public/becka_signature.png";
import img from "../public/dasuquin_itrustnmx_products_centered.webp";
import andrew_img from "../public/andrew_mkissick_w_golden_cropped.webp"
import andrew_signature from "../public/mcKissick_signature.webp"
import Link from "next/link";

const Section3 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.section1}>
        <h2>Product Spotlight</h2>
        <div className={classes.dasuquin_img_container}>
          <Image
            className={classes.dasuquin_img}
            src={img}
            alt={`Image of of Dasuquin® products`}
            fill
            priority={false}
          />
        </div>
        <div className={classes.sign_in_txt}>Sign-in to your account on the MyNutramax dashboard for exclusive Dasuquin<sup>®</sup> content.</div>
        <Link
          className={classes.button}
          href="https://www.mynutramax.com/dashboard/?#resources:dasuquin"
          target="_blank"
          aria-label="Learn More About Dasuquin®"
        >
          Learn More About Dasuquin<sup>®</sup>
        </Link>
      </div>
      <div className={classes.section2}>
        <div className={classes.becka_img_container}>
          <Image
            className={classes.becka_img}
            alt={`Image of of Becka Book, CVT`}
            src={andrew_img}
            fill
            priority={false}
          />
        </div>
        <div className={classes.quote_and_signature_container}>
          <div className={classes.quote}>
            {/* <span className={classes.openQuote}>&ldquo;</span> */}
            <h2>
              {/* <span className={classes.openQuote_mobile}>&ldquo;</span> */}
              What sets Dasuquin<sup>®</sup> apart is its unique combination of high-quality ingredients backed by scientific research.
              {/* <span className={classes.closeQuote_mobile}>&rdquo;</span> */}
            </h2>
            {/* <span className={classes.closeQuote}>&rdquo;</span> */}
          </div>
          <div className={classes.signature_container}>
            <p>Andrew McKissick, DVM</p>
            <p>Apple Grove Veterinary Clinic</p>
            <div className={classes.becka_signature_img_container}>
              <Image
                className={classes.becka_signature_img}
                alt={`Image of of Becka Book, CVT's signature`}
                src={andrew_signature}
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
