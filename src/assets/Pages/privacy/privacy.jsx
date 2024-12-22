
import styles from '/src/assets/module_styles/body.module.css'

import PrivacyHero from '../../components/privacy/privacyHero'
import PrivacyInfo from '../../components/privacy/privacyInfo'
import Homescreen from '../../components/privacy/homescreen'
import Header from '../../components/privacy/Header'
import Footer from '../../components/privacy/footer'
function Privacy (){

    return(
        <>
        <Header/>
        <main>
            <div className={styles.PrivacyTitle}>
                    <PrivacyHero/>
                     <PrivacyInfo/>
                     <Homescreen/>
            
                         
           </div>

        </main>
        <Footer/>

        </>
    )

}
export default Privacy