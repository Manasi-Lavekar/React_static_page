
import Navbar from "../Components/Navbar";
import styles from "./Card1.module.css";
import image2 from "../assets/IMAGE2.png";
import image3 from "../assets/IMAGE3.png";
import image4 from "../assets/IMAGE4.png";
import vector from "../assets/Vector.png";
import pc_img from "../assets/pc_img.png";
import image5 from "../assets/IMAGE5.png";
import image6 from "../assets/IMAGE6.png";
import image8 from "../assets/IMAGE8.png";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";


function Card1() {
  return (
    <div>
      <Navbar />
      <div className={styles.main_content}>
        <p>Best Website Builders in US</p>
        <hr></hr>
        <div className={styles.updates}>
          <div className={styles.updates_line}>
            <img src={image2} />
            <p>Last Updated - February 22, 2020 </p>
            <img src={image3} className={styles.image3} />
            <p>Advertising Disclosure</p>
          </div>
          <div className={styles.updates_last}>
            <p>Top Relevant </p>
            <img src={image4} />
          </div>
        </div>
        <hr></hr>
        <div className={styles.tools}>
          <p>Tools</p>
          <p>AWS Builder</p>
          <p>Start Build</p>
          <p>Build Supplies</p>
          <p>Tooling</p>
          <p>BlueHosting</p>
        </div>
        <div className={styles.tools2}>
          <p>Home</p>
          <img src={vector} />
          <p>Hosting for all</p>
          <img src={vector} />
          <p>Hosting</p>
          <img src={vector} />
          <p>Hosting6</p>
          <img src={vector} />
          <p>Hosting7</p>
        </div>
        <div className={styles.card_col}>
           <div className={styles.best_choice}>
                <img src={image8} />
                <p> Best Choice</p>
            </div>
          <div className={styles.card}>
          <span>1</span>
            <div className={styles.card_img}>
                
              <img src={pc_img} />
              <label>Builder 1</label>
            </div>
            <div className={styles.card_content}>
              <p>
                <span className={styles.bold_text}>
                  WixPro 72-Inch Responsive Website Builder-
                </span>Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
              </p>
             
              <p className={styles.bold_text}>Main highlights</p>
              
              <p className={styles.para2}>
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </p>
              <div className={styles.show_text}>
              <p>Show more</p>
              <img src={image5}/>
              </div>
            </div>
            <div className={styles.content_side}>
                <div className={styles.rating}>
                    <div className={styles.i_img}>
                    <img src={image3}/>
                    </div>
                    <p className={styles.num}>9.8</p>
                    <p>Exceptional</p>
                    <img src={image6}/>
                </div>
                <button>View</button>
            </div>
          </div>
          <Card2/>
          <Card3/>
          <Card4/>
          
        </div>
       
      </div>
      
    </div>
  );
}

export default Card1;
