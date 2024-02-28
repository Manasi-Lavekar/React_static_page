

import styles from "./Card1.module.css";
import image3 from "../assets/IMAGE3.png";
import pc_img from "../assets/pc_img.png";
import image5 from "../assets/IMAGE5.png";
import image11 from "../assets/IMAGE11.png";
import image12 from "../assets/IMAGE12.png";

function Card4() {
  return (
    <>
      <div className={styles.card}>
        <span>4</span>
        <div className={styles.card_img}>
          <img src={pc_img} />
          <label>CDK</label>
        </div>
        <div className={styles.card_content}>
          <p>
            <span className={styles.bold_text}>
            CDK Resposive Builder: 
            </span>
            An extensive library of widgets and apps, and detailed step-by-step guides
          </p>

          <p className={styles.bold_text}>Main highlights</p>

          <div className={styles.main_box}>
            <p><span>9.9</span>Building Responsive</p>
            <p><span>8.9</span>Cool</p>
            <p><span>8.9</span>Docs</p>
          </div>
          <p>Why we love it</p>
          <div  className={styles.rows}>
          <p><span><img src={image12}/></span>Documentation</p>
          <p ><span><img src={image12}/></span>Ease Use</p>
          <p><span><img src={image12}/></span>Out of the Box</p>
          </div>
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
            <p className={styles.num}>9.1</p>
            <p>Very Good</p>
            <img src={image11} />
          </div>
          <button className={styles.card4_btn}>View</button>
        </div>
      </div>
    </>
  );
}

export default Card4;
