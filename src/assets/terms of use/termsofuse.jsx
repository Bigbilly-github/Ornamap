import Footer from "../privacy/footer"
import Header from "../privacy/privacyHeadline"
import Homescreen from "../privacy/privacyhomescreen"
import TermsHero from "./termsHero"
import TermsInfo from "./termsInfo"
import styles from "/src/assets/privacy/privacybody.module.css"




function Terms () {

    return(
        <>
        <Header/>
        <div className={styles.PrivacyTitle}>
            <TermsHero/>
            <TermsInfo/>
            <Homescreen/>
        </div>
        <Footer/>
        </>
    )

}
export default Terms

