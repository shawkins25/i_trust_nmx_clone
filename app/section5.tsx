import Image from "next/image";
import Link from "next/link";
import classes from "./section5.module.css";
import { whyNutramaxIcons } from "./data/data";

const Section5 = () => {
  return (
    <div className={classes.section_5}>
      <div className={classes.section_5_inner}>
        <h3>Why Veterinary Professionals Trust Nutramax</h3>
        <div className={classes.section_5_icons_container}>
          {whyNutramaxIcons.map((item) => (
            <div className={classes.section_5_icon_container} key={item.title}>
              <div
                key={item.title}
                className={classes.section_5_icons_img_container}
              >
                <Image
                  className={classes.icon_img}
                  src={item.icon}
                  alt={item.title}
                  fill
                />
              </div>
              <h3>{item.title}</h3>
              {item.title === "Trusted" ? (
                <p>
                  The #1 veterinarian-recommended company{<sup>▼</sup>}, leading
                  the industry with high-quality pet supplements.
                </p>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.discover_container}>
        <h3 className={classes.discover_header}>
          Discover the Nutramax Difference for Yourself
        </h3>
        <p>
          Join our Clinic Staff Program and enjoy exclusive perks that make it
          easier and more affordable to care for your own pets.
        </p>
        <p>
          Unlock <strong>15% savings </strong>on products for your own dogs,
          cats, and horses, <strong>complimentary shipping</strong> on orders
          over $90, and direct shipping to your front door!
        </p>
        <Link
          className={classes.button}
          href="https://mynutramax.com/register"
          target="_blank"
          aria-label="Sign up for our clinic staff program to enjoy 15% off items for your personal pets"
        >
          unlock your staff savings now!
        </Link>
        </div>
    </div>
  );
};

export default Section5;
