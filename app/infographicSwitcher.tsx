"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import classes from "./section2.module.css";
import Link from "next/link";

type Option = { id: string; img: StaticImageData; title: string; path: string };

type Props = {
  selectedInfographic: Option | null;
  animal: string; // 'dog' | 'cat' | 'horse' (widen if you add more)
  setAnimal: (id: string) => void;
  animalInfographicOptions: Option[];
};

export default function InfographicSwitcher({
  selectedInfographic,
  animal,
  setAnimal,
  animalInfographicOptions,
}: Props) {
  // derive index of current animal
  const currentIndex = useMemo(
    () =>
      Math.max(
        0,
        animalInfographicOptions.findIndex((o) => o.id === animal)
      ),
    [animal, animalInfographicOptions]
  );
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [direction, setDirection] = useState(1); // 1 = forward (right), -1 = backward (left)

  useEffect(() => {
    setPrevIndex(currentIndex);
  }, []); // initialize once
  const handleChange = (id: string) => {
    const newIndex = animalInfographicOptions.findIndex(
      (item) => item.id === id
    );
    setDirection(newIndex > prevIndex ? 1 : -1);
    setPrevIndex(newIndex);
    setAnimal(id);
  };

  // Motion variants: slide in from dir, slide out opposite
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 320 : -320,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute" as const,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -320 : 320,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  return (
    <div className={classes.section_2_infographics_container}>
      {/* Wrapper with fixed aspect + overflow hidden prevents layout jump */}
      <div className={classes.infographic_stage}>
        <AnimatePresence mode="wait" custom={direction}>
          {selectedInfographic && (
            <motion.div
              key={selectedInfographic.id}
              className={classes.infographic_canvas}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Image
                className={classes.infographic_img}
                src={selectedInfographic.img}
                alt={`Infographic of ${selectedInfographic.id}`}
                fill
                priority={false}
                placeholder="blur"
                blurDataURL="/Dog_Diagram_Blur.png"
                sizes="(max-width: 768px) 95vw, 750px"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
            {selectedInfographic && (
<div className={classes.infographic_link}>
<Link href={selectedInfographic.path}>{selectedInfographic.title}</Link>
</div>
     )}
      <fieldset className={classes.animal_radio_group}>
        <legend>Click below to view different species:</legend>
        {animalInfographicOptions.map((item) => (
          <label key={item.id} className={classes.animal_radio_label}>
            <input
              type="radio"
              name="animal"
              value={item.id}
              checked={animal === item.id}
              onChange={() => handleChange(item.id)}
            />
            {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
          </label>
        ))}
      </fieldset>
    </div>
  );
}
