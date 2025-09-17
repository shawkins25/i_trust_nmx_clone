"use client";

import Link from "next/link";
import classes from "./section2.module.css";
import { animalInfographicOptions } from "./data/data";
import { useState, useMemo } from "react";
import InfographicSwitcher from "./infographicSwitcher";

const Section2 = () => {
 const [animal, setAnimal] = useState(animalInfographicOptions[0].id);

 const selectedInfographic = useMemo(
   () => animalInfographicOptions.find((o) => o.id === animal) ?? null,
   [animal]
 );

  return (
    <div className={classes.section_2}>
      <div className={classes.section_2_content_container}>
        <h2>You Recommend Nutramax at Work. Now Bring It Home.</h2>
        <p>You already trust Nutramax to support your patients’ health.</p>
        <p>
          Now, through our <strong>Clinic Staff Program</strong>, you can get
          exclusive discounts on the same high-quality supplements—for your own
          pets.
        </p>

        <p>
          From joint health to gastrointestinal support, give your pets the same
          trusted care you recommend every day.
        </p>

        <p>
          Because trust starts in the clinic—but it doesn’t have to end there.
        </p>
        <Link
          className={classes.button}
          href="https://mynutramax.com/register"
          aria-label="Join Our Clinic Staff Program!"
        >
          Join Our Clinic Staff Program
        </Link>
      </div>
      <InfographicSwitcher
       selectedInfographic={selectedInfographic}
       animal={animal}
       setAnimal={setAnimal}
       animalInfographicOptions={animalInfographicOptions}
     />
    </div>
  );
};
export default Section2;
