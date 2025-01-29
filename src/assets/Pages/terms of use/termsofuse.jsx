import Footer from "../../components/global/footer"


import TermsHero from "../../components/terms of use/termsHero"
import TermsInfo from "../../components/terms of use/termsInfo"
import styles from "/src/assets/module_styles/body.module.css"
import Homescreen from "../../components/global/homescreen"
import Header from "../../components/global/Header"




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







