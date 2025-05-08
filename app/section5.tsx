import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import { whyNutramaxIcons } from "./data/data";

const Section5 = () => {
  return (
    <section className={classes.section_5}>
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
      <h3 className={classes.discover_header}>
        Discover the Nutramax Difference for Yourself
      </h3>
      <Link
        className={classes.button}
        href="https://mynutramax.com/register/?utm_source=itrustnutramax_lp&utm_medium=Website&utm_campaign=itrust_cta"
        target="_blank"
      >
        Join Our Clinic Staff Program
      </Link>
    </section>
  );
};
export default Section5;
