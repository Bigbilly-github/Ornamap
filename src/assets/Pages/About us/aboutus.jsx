import AboutUsHero from "../../components/about us/aboutusHero"
import Footer from "../../components/privacy/footer"
import Header from "../../components/privacy/Header"
import Homescreen from "../../components/privacy/homescreen"
import styles from "/src/assets/module_styles/body.module.css"




function AboutUs (){

    return(
        <>
        <Header/>
            <div className={styles.PrivacyTitle}>
                <AboutUsHero/>
                 <Homescreen/>
            </div>
        <Footer/>
        </>
    )

}
export default AboutUs