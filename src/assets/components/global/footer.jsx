import styles from '/src/assets/module_styles/footer.module.css'
import ornamaplogo from '/src/assets/svg/footer/Frame 21.svg'
import applelogo from '/src/assets/svg/Homescreen/apple.svg'
import googleplaylogo from '/src/assets/svg/Homescreen/google.svg'
import Xlogo from '/src/assets/svg/footer/X.svg'
import tiktoklogo from '/src/assets/svg/footer/tiktok.svg'
import facebooklogo from '/src/assets/svg/footer/facebook.svg'
import linkedinlogo from '/src/assets/svg/footer/linkedin.svg'
import instagramlogo from '/src/assets/svg/footer/instagram.svg'
function Footer (){

    return(
        <>
        <footer >
            <div  className={styles.footer}>
                <div className={styles.links}>
                    <div className={styles.ornamaplogo}> 
                        <img src={ornamaplogo}/>
                        <p>
                        Never Miss a Beat. Own Every Commute.
                        </p>
                    </div>

                    <div className={styles.company}>
                        <a href='' className={styles.bold}>Company</a>
                        <a href=''>About Us</a>
                        <a href=''>Blog</a>
                        <a href=''>FAQs</a>
                    </div>

                    <div className={styles.legal}>
                        <a href=''  className={styles.bold}>Legal</a>
                        <a href=''>Privacy Policy</a>
                        <a href=''>Terms & Conditions</a>
                        
                    </div>

                    <div className={styles.contact}>
                        <a href='' className={styles.bold}>Contact Us</a>
                        <p>+234 705 133 4957</p>
                        <a href=''>support@ornamap.com</a>
                        <p>3, Folorusho Kazeem Close, Lagos Nigeria</p>
                    </div>

                    <div className={styles.button}>
                        <button>
                            <img src={applelogo}/>
                            Download for IOS
                        </button>
                        <button>
                            <img src={googleplaylogo}/>
                            Download for Android
                        </button>
                    </div>

                </div>

                <div className={styles.line}>

                </div>

                <div className={styles.copyright}>
                    <p className={styles.copyrightText}> &copy;{new Date().getFullYear()} Ornamap.All rights reserved.</p>
                    <div className={styles.socialApps}>
                        <div>
                            <img src={Xlogo}/>
                            <p>X(Twitter)</p>
                        </div>
                        <div>
                            <img src={tiktoklogo}/>
                            <p>Tiktok</p>
                        </div>

                        <div>
                            <img src={facebooklogo}/>
                            <p>Facebook</p>
                        </div>

                        <div>
                            <img src={linkedinlogo}/>
                            <p>LinkedIn</p>
                        </div>

                        <div>
                            <img src={instagramlogo}/>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>

                <div className={styles.ornamapText}>
                    <p>OrnaMap</p>

                </div>

            </div>
        </footer>
        </>
    )

}
export default Footer