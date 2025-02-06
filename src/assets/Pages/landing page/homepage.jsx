import Hero from "../../components/landing page/hero"
import Header from "../../components/global/Header"
import UrbanMobility from "../../components/landing page/urbanmobility"
import Features from "../../components/landing page/features"
import Search from "../../components/landing page/search"
import WelcomeBonus from "../../components/landing page/welcomebonus"
import Homescreen from "../../components/global/homescreen"

import styles from '/src/assets/module_styles/body.module.css'
import Accordion from "../../components/landing page/accordion"




function Homepage (){

    return(
        <>
          <Header/>
          <main>
                <Hero/>
                <UrbanMobility/>
                <Features/>
                <Search/>
                <WelcomeBonus/>
                <div className={styles.PrivacyTitle}>
                     <Homescreen/>
                </div>
                <Accordion/>
                

          </main>


      

                         
        

        </>
    )

}
export default Homepage 