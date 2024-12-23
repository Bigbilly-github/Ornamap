import styles from '/src/assets/module_styles/body.module.css'


import Homescreen from '../../components/privacy/homescreen'
import Header from '../../components/privacy/Header'
import Footer from '../../components/privacy/footer'
import FaqsHero from '../../components/faqs/faqshero'
function Faqs (){

    return(
        <>
        <Header/>
        <main>
            <div className={styles.PrivacyTitle}>

                     <FaqsHero/>
                     <Homescreen/>
            
                         
           </div>

        </main>
        <Footer/>

        </>
    )

}
export default Faqs