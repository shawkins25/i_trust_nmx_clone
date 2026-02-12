import classes from "./section1b.module.css";

const Section1B = () => {
  return (
      <div className={classes.section_1_video_container}>
        <iframe
          src="https://fast.wistia.net/embed/iframe/k4jnc8u8x8?web_component=true&seo=true"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ width: "100%", height: "100%" }}
        />
      </div>
  );
};

export default Section1B;
