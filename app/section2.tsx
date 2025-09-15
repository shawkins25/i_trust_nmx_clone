"use client";

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
    <div className={classes.section_2}>
      <div className={classes.section_2_content_container}>
        <h2>You Recommend Nutramax at Work. Now Bring It Home.</h2>
        <h4>
          Nutramax provides specialized supplements designed to support multiple
          facets of pet health.
        </h4>
        <p>
          You already trust Nutramax to support your patients’ health.</p>

<p>Now, through our Clinic Staff Program, you can get exclusive discounts on the same high-quality supplements—for your own pets.</p>

<p>From joint health to gastrointestinal support, give your pets the same trusted care you recommend every day.</p>

<p>Because trust starts in the clinic—but it doesn’t have to end there.
        </p>
        <Link
          className={classes.button}
          href="https://www.mynutramax.com/dashboard/"
          aria-label="Join Our Clinic Staff Program!"
        >
          Join Our Clinic Staff Program
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
    </div>
  );
};
export default Section2;
