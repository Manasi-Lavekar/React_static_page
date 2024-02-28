

import styles from "./Card1.module.css";
import image3 from "../assets/IMAGE3.png";
import pc_img from "../assets/pc_img.png";
import image5 from "../assets/IMAGE5.png";
import image10 from "../assets/IMAGE10.png";
import image9 from "../assets/IMAGE9.png";

function Card2() {
  return (
   <>
          <div className={styles.best_choice}>
            <img src={image9} />
            <p> Best Value</p>
          </div>
          <div className={styles.card}>
            <span>2</span>
            <div className={styles.card_img}>
              <img src={pc_img} />
              <label>Builder 1</label>
            </div>
            <div className={styles.card_content}>
              <p>
                <span className={styles.bold_text}>
                  SiteCraft 68-Inch Ultimate Web Design Studio-
                </span>
                Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
                for Dynamic Websites and E-commerce Platforms (Green/White)
              </p>

              <p className={styles.bold_text}>Main highlights</p>

              <p className={styles.para2}>
                [What You Get]: Gain access to the SiteCraft design studio,
                featuring a robust selection of design elements, SEO
                optimization tools, and e-commerce integrations.
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
                <p className={styles.num}>9.5</p>
                <p>Excellent</p>
                <img src={image10} />
              </div>
              <button>View</button>
            </div>
          </div>
          </>
  );
}

export default Card2;
