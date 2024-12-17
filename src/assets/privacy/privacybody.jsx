
import styles from '../privacy/privacybody.module.css'

import PrivacyHero from './privacyHero'
import PrivacyInfo from './privacyInfo'
import PrivacyHomescreen from './privacyhomescreen'
function PrivacyBody (){

    return(
        <>
        <main>
            <div className={styles.PrivacyTitle}>
                    <PrivacyHero/>
                     <PrivacyInfo/>
                     <PrivacyHomescreen/>
            
                         
           </div>

        </main>

        </>
    )

}
export default PrivacyBody