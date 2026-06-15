import classes from "./section3_new.module.css";
import Link from "next/link";

const LEARN_MORE_HREF =
  "https://www.mynutramax.com/dashboard/?#resources:proviable";

const Section3New = () => {
  return (
    <section className={classes.section} aria-label="Proviable product spotlight">
      <Link
        className={classes.bannerLink}
        href={LEARN_MORE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="I trust Nutramax Laboratories — I trust Proviable. Learn more on MyNutramax."
      >
        <span className={classes.bannerArt} />
      </Link>
    </section>
  );
};

export default Section3New;
