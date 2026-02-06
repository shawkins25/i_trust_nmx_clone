// "use client";

import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import classes from "./section1.module.css";

const Section1 = () => {
  // const [showVideo, setShowVideo] = useState(false);

  console.log("test");

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
        <h1 className={classes.light_green}>
          Discover the Trusted Choice in Veterinary Supplements
        </h1>
        <p className={classes.section_1_text}>
          For over 30 years, Nutramax Laboratories has been committed to
          exceptional quality, rigorous research, and innovative solutions that
          veterinarians trust for their patients.
        </p>
        <p className={classes.section_1_text}>
          <strong>
            Now, you can experience that same trusted quality with your own
            pets.
          </strong>
        </p>
        <Link
          className={classes.button}
          href="https://contact.mynutramaxlabs.com/i-trust-sweepstakes"
          target="_blank"
          aria-label="Enter I Trust Nutramax Sweepstakes now!"
        >
          Join Our Clinic Staff Program
        </Link>
        {/* <p className={classes.small_text}>Submit entries by 11:59pm on September 11</p> */}
      </div>
      <div className={classes.section_1_video_container}>
        {/* {!showVideo ? (
          <Image
            src="/i_trust_thumb.png"
            alt="Play Video"
            fill
            priority
            onClick={() => setShowVideo(true)}
            style={{ cursor: "pointer", objectFit: "cover" }}
          />
        ) : ( */}
        <iframe
          src="https://fast.wistia.net/embed/iframe/k4jnc8u8x8?web_component=true&seo=true"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ width: "98.5%", height: "100%" }}
        />
        {/* )} */}
      </div>
    </div>
  );
};
export default Section1;

{
  /* <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/k4jnc8u8x8?web_component=true&seo=true" title="NXT_I TRUST NUTRAMAX_2 MIN_R7 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>
<script src="https://fast.wistia.net/player.js" async></script> */
}
