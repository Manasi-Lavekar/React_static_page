

import styles from "./Card1.module.css";
import image3 from "../assets/IMAGE3.png";
import pc_img from "../assets/pc_img.png";
import image5 from "../assets/IMAGE5.png";
import image6 from "../assets/IMAGE6.png";

function Card3() {
  return (
    <>
      <div className={styles.card}>
        <span>3</span>
        <div className={styles.card_img}>
          <img src={pc_img} />
          <label>Builder 1</label>
        </div>
        <div className={styles.card_content}>
          <p>
            <span className={styles.bold_text}>
              WixPro 72-Inch Responsive Website Builder-
            </span>
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>

          <p className={styles.bold_text}>Main highlights</p>

          <p className={styles.para2}>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <div className={styles.show_text}>
            <p>Show more</p>
            <img src={image5} />
          </div>
        </div>
        <div className={styles.content_side}>
          <div className={styles.rating}>
            <div className={styles.i_img}>
              <img src={image3} />
            </div>
            <p className={styles.num}>9.3</p>
            <p>Exceptional</p>
            <img src={image6} />
          </div>
          <button>View</button>
        </div>
      </div>
    </>
  );
}

export default Card3;
