"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classes from "./section1.module.css";

const Section1 = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={classes.section_1}>
      <div className={classes.section_1_bg_img_container}>
        <Image
          className={classes.section_1_bg_img}
          src="/Section_1_BG_Mobile_new.webp"
          alt="background image"
          fill
          priority
          placeholder="blur"
          blurDataURL="/Section_1_BG_Mobile_blur.png"
        />
      </div>
      <div className={classes.section_1_content_container}>
        <Image
          className={classes.section_1_logo_img}
          src="/I_Trust_NMX_Logo_small.webp"
          alt="I Trust Nutramax logo"
          width={250}
          height={134}
          priority
        />
        <h1>Discover the Trusted Choice in Veterinary Supplements</h1>
        <p>
          For over 30 years, Nutramax Laboratories has been committed to
          exceptional quality, rigorous research, and innovative solutions that
          veterinarians trust for their patients. Now, you can experience that
          same trusted quality with your own pets.
        </p>
        <p>
          Now we&apos;re celebrating the trust you put in Nutramax for your patients
          and your own pets with your chance to win an onsite celebration for
          your own clinic, Nutramax swag, products, and more!
        </p>
        <Link
          className={classes.button}
          href="https://contact.mynutramaxlabs.com/i-trust-sweepstakes"
          target="_blank"
          aria-label="Enter I Trust Nutramax Sweepstakes now!"
        >
          ENTER SWEEPSTAKES NOW
        </Link>
      </div>
      <div className={classes.section_1_video_container}>
        {!showVideo ? (
          <Image
            src="/Video_Placeholder.png"
            alt="Play Video"
            fill
            priority
            onClick={() => setShowVideo(true)}
            style={{ cursor: "pointer", objectFit: "cover" }}
          />
        ) : (
          <iframe
            src="https://fast.wistia.net/embed/iframe/sgxwp447y5"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </div>
  );
};
export default Section1;
