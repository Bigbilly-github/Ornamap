
import train from './images/Train.svg'
import ferry from './images/Ferry.svg'
import bus from './images/Bus.svg'
import line from './images/Vector.svg'
import line2 from './images/Vector1.svg'
import line3 from './images/Vector2.svg'
import styles from './features.module.css'

function Features (){


    return(
        <>
        <div className={styles.FeaturesSection} >
            <div className={styles.mobility}>
                <h2>
                Urban Mobilities we provide solutions to
                </h2>
                <p>
                OrnaMap simplifies your city exploration. Easily switch between trains, buses, and ferries with a tap.
                </p>
            </div>
            <div className={styles.trainSection}>

                    <div className={styles.trainText}>
                            <h3>
                                Train
                            </h3>
                            <p>
                                    OrnaMap helps you track live train times and plan your perfect route in seconds. See real-time arrivals, platform changes, and service updates for a stress-free journey.
                            </p>
                    </div>
                
                <div className={styles.trainImage}>
                    <div className={styles.trainImageMain}> 
                        <img src={train}/>
                            <div>
                                <img src={line} className={styles.line}/>

                            </div>

                       

                    </div>
                    

                   
                </div>
            </div>
            <div className={styles.ferryndbus}>
                <div className={styles.ferry}>
                    <div className={styles.ferryText}>
                        <h3>
                        Ferry
                        </h3>
                        <p>
                        OrnaMap shows you real-time ferry schedules and helps you plan your waterway trips without the guesswork.
                        </p>
                    </div>
                    <div className={styles.ferryImage}>
                        <img src={ferry}/>
                        <div className={styles.ferryImageLine}>
                            <img src={line3}/>
                        </div>
                    </div>
                </div>

                <div className={styles.bus}>
                    <div className={styles.busText}>
                        <h3>
                        Bus
                        </h3>
                        <p>
                        Navigate your bus journey with ease using live schedules and route mapping on OrnaMap for a hassle-free commute.
                        </p>
                    </div>
                    <div className={styles.busImage}>
                        <img src={bus}></img>
                        <div className={styles.busImageLine}>
                            <img src={line2}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default Features