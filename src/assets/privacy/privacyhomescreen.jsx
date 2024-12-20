import homescreen from'../privacy/images/Home screen.svg'
import profilepic from '../privacy/images/Frame 4157.svg'
import applelogo from '../privacy/images/apple.svg'
import googleplaylogo from '../privacy/images/google.svg'
import styles from '../privacy/privacybody.module.css'

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