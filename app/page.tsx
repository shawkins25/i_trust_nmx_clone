"use client";

import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";
import {
  whyNutramaxIcons,
  vetProfessionals,
  animalInfographicOptions,
  termsLinks,
} from "./data/data";
import { useState } from "react";

export default function Home() {
  const [animal, setAnimal] = useState("dog");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevMobile = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? vetProfessionals.length - 1 : prev - 1
    );
  };

  const handleNextMobile = () => {
    setCurrentIndex((prev) =>
      prev === vetProfessionals.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, vetProfessionals.length - 2) : prev - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= vetProfessionals.length - 2 ? 0 : prev + 2
    );
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const selectedInfographic = animalInfographicOptions.find(
    (item) => item.id === animal
  );

  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <section className={classes.section_1}>
          <div className={classes.section_1_content_container}>
            <div className={classes.section_1_logo_img_container}>
              <Image
                className={classes.section_1_logo_img}
                src="/I_Trust_NMX_Logo.webp"
                alt="I Trust Nutramax logo"
                objectFit="cover"
                fill
                priority
              />
            </div>
            <h1>Discover the Trusted Choice in Veterinary Supplements</h1>
            <p>
              For over 30 years, Nutramax Laboratories has been committed to
              exceptional quality, rigorous research, and innovative solutions
              that veterinarians trust for their patients. Now, you can
              experience that same trusted quality with your own pets.
            </p>
            <Link
              className={classes.button}
              href="https://mynutramax.com/register/"
              target="_blank"
            >
              Join Our Clinic Staff Program
            </Link>
          </div>
          {/* <div className={classes.section_1_video_container}>
            <video
              className={classes.section_1_video_img}
              width="100%"
              controls
              poster="/Video_Placeholder.png"
              preload="none"
              autoPlay
            >
              <source src={"/I_Trust_Nutramax_Video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
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
                  width: "100%"
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
            <script
              src="https://fast.wistia.com/assets/external/E-v1.js"
              async
            ></script>
          </div>
        </section>
        <section className={classes.section_2}>
          <div className={classes.section_2_content_container}>
            <h2>Versatile Wellness Support for Pets</h2>
            <h4>
              Nutramax provides specialized supplements designed to support
              multiple facets of pet health.
            </h4>
            <p>
              From joint health to gastrointestinal support, trust Nutramax to
              support your patients’ well-being.
            </p>
            <Link className={classes.button} href="#testimonials">
              Discover What Vets Are Saying
            </Link>
          </div>
          <div className={classes.section_2_infographics_container}>
            {selectedInfographic && (
              <div className={classes.infographic_img_container}>
                <Image
                  className={classes.infographic_img}
                  src={selectedInfographic.img}
                  alt={`Infographic of ${selectedInfographic.id}`}
                  objectFit="cover"
                  fill
                />
              </div>
            )}
            <fieldset className={classes.animal_radio_group}>
              <legend>Click below to view difference species:</legend>
              {animalInfographicOptions.map((item) => (
                <label key={item.id} className={classes.animal_radio_label}>
                  <input
                    type="radio"
                    name="animal"
                    value={item.id}
                    checked={animal === item.id}
                    onChange={() => setAnimal(item.id)}
                  />
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </label>
              ))}
            </fieldset>
          </div>
        </section>
        <section className={classes.section_3}>
          {/* <Image
            className={classes.section_3_img}
            src="/CSP_BG.webp"
            alt="Clinic Staff Program Infographic"
            objectFit="cover"
            objectPosition="bottom"
            fill
          /> */}
          <div className={classes.section_3_content}>
            <h2>Clinic Staff</h2>
            <h3>program</h3>
            <h4>Sign up now and enjoy 15% off items for your personal pets.</h4>
            <Link
              className={classes.sign_up_button}
              href="https://mynutramax.com/register/"
              target="_blank"
            >
              Sign Up
            </Link>
          </div>
        </section>
        <section id="testimonials" className={classes.section_4}>
          <div className={classes.section_4_content_container}>
            <h3>Recommended by Veterinary Professionals</h3>
            <h4>
              {`Veterinarians don't just trust Nutramax—they confidently recommend it. From enhancing patient care to supporting quality of life, Nutramax is the #1 Veterinarian Recommended Supplement Company. See why these vets proudly say, "I Trust Nutramax."`}
            </h4>
          </div>
          {/* Only one testimonial on mobile */}
          <div className={classes.section_4_testimonials_container_mobile}>
            <div className={classes.testimonial_container}>
              <div className={classes.testimonial_img_container}>
                <Image
                  className={classes.testimonial_img}
                  src={vetProfessionals[currentIndex].img}
                  alt={`Image of ${vetProfessionals[currentIndex].name}`}
                  objectFit="cover"
                  fill
                />
              </div>
              <div className={classes.testimonial_content_container}>
                <h3>{vetProfessionals[currentIndex].name}</h3>
                <h4>{vetProfessionals[currentIndex].title}</h4>
                <h5>{vetProfessionals[currentIndex].location}</h5>
                <p>{`"${vetProfessionals[currentIndex].quote}"`}</p>
              </div>
            </div>
            <div className={classes.carousel_navigation}>
              <button onClick={handlePrevMobile}>&lt;</button>
              {vetProfessionals.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={currentIndex === index ? classes.active_dot : ""}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={handleNextMobile}>&gt;</button>
            </div>
          </div>
          {/* Full testimonials for desktop */}
          <div className={classes.section_4_testimonials_container_desktop}>
            <div className={classes.slider_wrapper}>
              <div
                className={classes.slider_track}
                style={{
                  transform: `translateX(-${(currentIndex / 2) * 100}%)`,
                }}
              >
                {vetProfessionals.map((item) => (
                  <div key={item.name} className={classes.testimonial_slide}>
                    <div className={classes.testimonial_img_container}>
                      <Image
                        className={classes.testimonial_img}
                        src={item.img}
                        alt={`Image of ${item.name}`}
                        objectFit="cover"
                        fill
                      />
                    </div>
                    <div className={classes.testimonial_content_container}>
                      <h3>{item.name}</h3>
                      <h4>{item.title}</h4>
                      <h5>{item.location}</h5>
                      <p>{item.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.carousel_navigation_desktop}>
              <button onClick={handlePrev}>&lt;</button>
              {Array.from({
                length: Math.ceil(vetProfessionals.length / 2),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 2)}
                  className={
                    currentIndex === index * 2 ? classes.active_dot : ""
                  }
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={handleNext}>&gt;</button>
            </div>
          </div>
        </section>
        <section className={classes.section_5}>
          <h3>Why Veterinary Professionals Trust Nutramax</h3>
          <div className={classes.section_5_icons_container}>
            {whyNutramaxIcons.map((item) => (
              <div
                className={classes.section_5_icon_container}
                key={item.title}
              >
                <div
                  key={item.title}
                  className={classes.section_5_icons_img_container}
                >
                  <Image
                    className={classes.icon_img}
                    src={item.icon}
                    alt={item.title}
                    objectFit="cover"
                    fill
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          <Link
            className={classes.button}
            href="https://mynutramax.com/register/"
            target="_blank"
          >
            Join Our Clinic Staff Program
          </Link>
        </section>
      </main>
      <footer className={classes.footer}>
        <div className={classes.inner_footer_container}>
          <p>
            ▼ Source: Survey conducted among small animal veterinarians who
            recommended animal health supplements.
          </p>
          <div className={classes.footer_info_container}>
            {termsLinks.map((item) => (
              <div key={item.title} className={classes.term_item}>
                <Link href={item.path} target="_blank">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
