
import image from '/src/assets/svg/landingpage/welcomebonusmockup.svg'
import styles from '/src/assets/module_styles/welcomebonus.module.css'

function WelcomeBonus (){

    return(
        <>
         <section className={styles.welcomeBonusSection}>
            <div className={styles.welcomebonus}>
               
                    <div className={styles.welcomebonusdetails}>
                        <h1>
                        Earn up to ₦500 as a welcome sign-up bonus bonus!
                        </h1>
                        <p>
                        Plus, enjoy instant cashback on your Cowry card every time you top up. It’s fast, easy, and the rewards keep coming.
                        </p>
                    </div>
                    <img src={image} alt="" />

               

            </div>

         </section>
        </>
    )

}
export default WelcomeBonus