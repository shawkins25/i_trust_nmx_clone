'use client'

import Link from "next/link";
import Image from "next/image";
import classes from "./section2.module.css";
import { animalInfographicOptions } from "./data/data";
import { useState } from "react";

const Section2 = () => {
  const [animal, setAnimal] = useState("dog");

  const selectedInfographic = animalInfographicOptions.find(
    (item) => item.id === animal
  );

  return (
    <section className={classes.section_2}>
      <div className={classes.section_2_content_container}>
        <h2>Versatile Wellness Support for Pets</h2>
        <h4>
          Nutramax provides specialized supplements designed to support multiple
          facets of pet health.
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
              fill
              priority={false}
              placeholder="blur"
            blurDataURL="/Dog_Diagram_Blur.png"
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
  );
};
export default Section2;
