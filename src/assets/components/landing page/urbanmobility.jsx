
import styles from '/src/assets/module_styles/urbanmobil.module.css'
import train from '/src/assets/svg/landingpage/train.svg'
import bluetrain from '/src/assets/svg/landingpage/bluerail.svg'
import redtrain from '/src/assets/svg/landingpage/redrail.svg'
import ferry from   '/src/assets/svg/landingpage/ferry.svg'
import brt from   '/src/assets/svg/landingpage/brt.svg'


function UrbanMobility (){

    return(
        <>
           <section className={styles.urbanmobil}>
             <div className={styles.urbanMobility}>
                    <div className={styles.urbantextdiv}>
                        <h1>Urban Mobilities we provide solutions to</h1>
                        <p>OrnaMap simplifies both public & private transportation in Nigeria, starting with Lagos. Easily switch between trains, buses, and ferries with a tap.</p>
                    </div>

                    <div className={styles.urbanRep}>
                        <div className={styles.urbantrain}>
                            <img src={train} alt="train image" />
                            <div className={styles.urbantraintext}>
                                <h3>NRC Lagos - Ibadan </h3>
                                <p>Get bus stop to bus stop navigation in Lagos. And find the the fastest and cheapest BRT route to your destination.</p>
                            </div>

                        </div>
                        <div className={styles.urbanrail}>
                            <div className={styles.bluerail}>
                                <div className={styles.traindiv}>
                                    <img src={bluetrain} alt="image of a blue train"  />
                                </div>
                                <div className={styles.railtext}>
                                        <h3 >
                                        Lagos Blue Line Rail (Mile2 - Marina)
                                        </h3>
                                        <p>
                                        Get real time train schedules, train fares, accurate train stops, easy navigation to train stations.
                                        </p>

                                </div>


                            </div>

                            <div className={styles.redrail}>
                                <div className={styles.traindiv}>
                                    <img src={redtrain} alt="image of a red train"  />
                                </div>
                                <div className={styles.redrailtext}>
                                    <h3>
                                    Lagos Red Line Rail (Agbado -Oyingbo)
                                    </h3>
                                    <p>
                                    Move around Lagos Mainland with ease. Plan your trips effortlessly; check out train timetable, ticket fares and train stops with OrnaMap
                                    </p>
                                </div>

                            </div>



                        </div>

                        <div className={styles.urbanrail}>
                            <div className={styles.bluerail}>
                                <div className={styles.traindiv}>
                                    <img src={ferry} alt="image of a blue train"  />
                                </div>
                                <div className={styles.railtext}>
                                        <h3 >
                                        Lagos Ferry
                                        </h3>
                                        <p>
                                        OrnaMap provides all the details you need for your water-way trips; from real-time ferry schedules , fares, to terminal locations. OrnaMap has you covered.
                                        </p>

                                </div>


                            </div>

                            <div className={styles.redrail}>
                                <div className={styles.traindiv}>
                                    <img src={brt} alt="image of a red train"  />
                                </div>
                                <div className={styles.redrailtext}>
                                    <h3>
                                    Lagos BRT Network
                                    </h3>
                                    <p>
                                    Get bus stop to bus stop navigation in Lagos. And find the the fastest and cheapest BRT route to your destination.
                                    </p>
                                </div>

                            </div>



                        </div>
                    </div>




             </div>

           </section>
        </>
    )

}
export default UrbanMobility