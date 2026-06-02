import classes from "./section3_new.module.css";
import Link from "next/link";

const BANNER_ALT =
  "I trust Nutramax Laboratories — I trust Proviable. #1 veterinarian recommended supplement company.";

const LEARN_MORE_HREF =
  "https://www.mynutramax.com/dashboard/?#resources:proviable";

/**
 * Responsive Proviable banner art. Files live in public/section3 and are named
 * by pixel dimensions (IAB-style). The browser picks one source via <picture>;
 * thin leaderboard sizes (320x50, 728x90, 940x30) are omitted here — they are
 * poor fits for a full-width section hero.
 */
const Section3New = () => {
  return (
    <section className={classes.section} aria-label="Proviable product spotlight">
      <Link
        className={classes.bannerLink}
        href={LEARN_MORE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Learn more about Proviable on MyNutramax"
      >
        <picture className={classes.picture}>
          <source
            media="(max-width: 479px)"
            srcSet="/section3/816x1056.webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/section3/600x400.webp"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/section3/800x800.webp"
          />
          <img
            className={classes.bannerImg}
            src="/section3/940x300.webp"
            alt={BANNER_ALT}
            width={940}
            height={300}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </Link>
    </section>
  );
};

export default Section3New;
