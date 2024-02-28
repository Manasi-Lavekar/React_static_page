import styles from "./Ver_Cards.module.css";
import pc_img from "../assets/pc_img.png";


function Ver_Cards(){
    return(
        <>
        <div className={styles.ver_card}>
            <div className={styles.pc_img}>
            <img src={pc_img}/>
            </div>
            <p className={styles.first_r}><span>20% off</span><span>Limited time</span></p>
            <p className={styles.second_r}>Web Builder 1</p>
            <p className={styles.third_r}>Computer Modern classic with wix support</p>
            <p><span className={styles.p1}>$39.96</span><span className={styles.p2}>$49.96</span><span className={styles.p3}>(20% off)</span></p>
            <button>View Deal</button>
        </div>
        </>
    );
}

export default Ver_Cards;