"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import classes from "./section1.module.css";

const Section1 = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://fast.wistia.com/assets/external/E-v1.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className={classes.section_1}>
      <div className={classes.section_1_bg_img_container}>
        <Image
          className={classes.section_1_bg_img}
          src="/Section_1_BG_Mobile.webp"
          alt="background image"
          fill
          priority
          placeholder="blur"
          blurDataURL="/Section_1_BG_Mobile_blur.png"
        />
      </div>
      <div className={classes.section_1_content_container}>
        <div className={classes.section_1_logo_img_container}>
          <Image
            className={classes.section_1_logo_img}
            src="/I_Trust_NMX_Logo_small.webp"
            alt="I Trust Nutramax logo"
            fill
            priority
            placeholder="blur"
            blurDataURL="/I_Trust_NMX_Logo_Blur.png"
          />
        </div>
        <h1>Discover the Trusted Choice in Veterinary Supplements</h1>
        <p>
          For over 30 years, Nutramax Laboratories has been committed to
          exceptional quality, rigorous research, and innovative solutions that
          veterinarians trust for their patients. Now, you can experience that
          same trusted quality with your own pets.
        </p>
        <Link
          className={classes.button}
          href="https://mynutramax.com/register/?utm_source=itrustnutramax_lp&utm_medium=Website&utm_campaign=itrust_cta"
          target="_blank"
        >
          Join Our Clinic Staff Program
        </Link>
      </div>
      <div className={classes.section_1_video_container}>
        <div
          className="wistia_responsive_padding"
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
            color: "#006a39",
            background: "#006a39",
          }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <iframe
              src="https://fast.wistia.net/embed/iframe/sgxwp447y5"
              title="Wistia video player"
              allow="autoplay; fullscreen"
              allowFullScreen
              frameBorder="0"
              style={{
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;
