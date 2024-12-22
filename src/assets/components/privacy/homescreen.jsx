import homescreen from'/src/assets/svg/Homescreen/Home screen.svg'
import profilepic from '/src/assets/svg/Homescreen/Frame 4157.svg'
import applelogo from '/src/assets/svg/Homescreen/apple.svg'
import googleplaylogo from '/src/assets/svg/Homescreen/google.svg'
import styles from '/src/assets/module_styles/body.module.css'

function Homescreen (){

    return(
        <>
                        <section>
                                <div className={styles.homescreenbox}>
                                    <div className={styles.homescreentext}>
                                        <p>
                                        OrnaMap makes your commuting experience smoother.
                                        </p>
                                        <div>
                                            <img src={profilepic}/>
                                            <p>35k+ users</p>

                                        </div>
                                        <button>
                                                <img src={applelogo} className={styles.applelogo}/>
                                                <img src={googleplaylogo} className={styles.googleplaylogo}/> 
                                                 Download for ios

                                        </button>

                                    </div>
                                  
                                        <img src={homescreen} className={styles.homescreen}/>
                                   

                                </div>
                        </section>
           
        </>
    )

}
export default Homescreen