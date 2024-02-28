import styles from "./Ver_Cards3.module.css";
import Ver_Cards from "./Ver_Cards";


function Ver_Cards3(){
    return(
        <>
        <div className={styles.cards_row}>
        <p>Related deals you might like for</p>
        <div className={styles.ver_cards}>
        <Ver_Cards/>
        <Ver_Cards/>
        <Ver_Cards/>
        </div>
        
        </div>
        <div className={styles.signup}>
        <p>Sign up and get exclusive special deals</p>
        <button>Sign Up</button>
        </div>
        </>
    );
}

export default Ver_Cards3;