import Link from "next/link";
import classes from "./section3.module.css";

const Section3 = () => {
  return (
    <Link
      className={classes.section_3}
      href="https://mynutramax.com/register/"
      target="_blank"
      aria-label="Sign up for our clinic staff program to enjoy 15% off items for your personal pets"
    >
      <div className={classes.section_3_content}>
        <h2>Clinic Staff</h2>
        <h3>program</h3>
        <h4>Sign up now and enjoy 15% off items for your personal pets.</h4>
        <div className={classes.sign_up_button}>Sign Up</div>
      </div>
    </Link>
  );
};
export default Section3;
