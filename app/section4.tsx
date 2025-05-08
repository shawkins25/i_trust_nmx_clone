"use client";

import Image from "next/image";
import { vetProfessionals } from "./data/data";
import classes from "./page.module.css";
import { useState } from "react";

const Section4 = () => {
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

  return (
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
              fill
              priority={false}
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
                    fill
                    priority={false}
                  />
                </div>
                <div className={classes.testimonial_content_container}>
                  <h3>{item.name}</h3>
                  <h4>{item.title}</h4>
                  <h5>{item.location}</h5>
                  <p>{`"${item.quote}"`}</p>
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
              className={currentIndex === index * 2 ? classes.active_dot : ""}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </section>
  );
};
export default Section4;
