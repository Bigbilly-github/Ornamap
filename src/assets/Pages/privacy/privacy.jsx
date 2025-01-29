
import styles from '/src/assets/module_styles/body.module.css'

import PrivacyHero from '../../components/privacy/privacyHero'
import PrivacyInfo from '../../components/privacy/privacyInfo'
import Homescreen from '../../components/global/homescreen'
import Header from '../../components/global/Header'
import Footer from '../../components/global/footer'

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