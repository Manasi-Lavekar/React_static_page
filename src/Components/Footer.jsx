import styles from "./Footer.module.css";
function Footer(){
    return(
        <div className={styles.footer}>
            <div>
                <p>CATEGORIES</p>
                <p>Web Builder</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic Automation</p>
            </div>
            <div>
               <p>CONTACT</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms of Services</p>
                <p>Categories</p>
                <p>About</p>
                
            </div>
            <p>United States</p>
        </div>
    );
}

export default Footer;