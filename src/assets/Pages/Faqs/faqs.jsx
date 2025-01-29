import styles from '/src/assets/module_styles/body.module.css'


import Homescreen from '../../components/global/homescreen'
import Header from '../../components/global/Header'
import Footer from '../../components/global/footer'
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