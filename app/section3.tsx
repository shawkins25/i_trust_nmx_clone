import Link from "next/link"
import classes from "./section3.module.css"

const Section3 = () => {
  return (
    <Link
    className={classes.section_3}
    href="https://mynutramax.com/register/?utm_source=itrustnutramax_lp&utm_medium=Website&utm_campaign=itrust_banner"
    target="_blank"
  >
    <div className={classes.section_3_content}>
      <h2>Clinic Staff</h2>
      <h3>program</h3>
      <h4>Sign up now and enjoy 15% off items for your personal pets.</h4>
      <div className={classes.sign_up_button}>Sign Up</div>
    </div>
  </Link>
  )
}
export default Section3