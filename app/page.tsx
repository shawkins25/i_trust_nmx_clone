import classes from "./page.module.css";
import Link from "next/link";
import { termsLinks } from "./data/data";
import dynamic from "next/dynamic";
import { animalInfographicOptions } from "./data/data";

const Section1 = dynamic(() => import("./section1"), { ssr: true });
const Section2 = dynamic(() => import("./section2"), { ssr: true });
const Section3 = dynamic(() => import("./section3"), { ssr: true });
const Section4 = dynamic(() => import("./section4"), { ssr: true });
const Section5 = dynamic(() => import("./section5"), { ssr: true });

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <footer className={classes.footer}>
        <div className={classes.inner_footer_container}>
          <p>
            {<sup>▼</sup>}Source: Survey conducted among small animal
            veterinarians who recommended animal health supplements.
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
