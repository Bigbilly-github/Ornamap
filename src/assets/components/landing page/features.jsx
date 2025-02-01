import mockup from '/src/assets/svg/landing page/iMockup.svg'
import mockup2 from '/src/assets/svg/landing page/iMockup2.svg'
import mockup7 from '/src/assets/svg/landing page/iMockup2.5.svg'
import mockup3 from '/src/assets/svg/landing page/iMockup3.svg'
import mockup4 from '/src/assets/svg/landing page/iMockup4.svg'
import mockup5 from '/src/assets/svg/landing page/iMockup5.svg'
import mockup6 from '/src/assets/svg/landing page/iMockup6.svg'
import styles from '/src/assets/module_styles/features.module.css'
function Features (){

    return(
        <>
          <section className={styles.featuresSection} >
             <div className={styles.features}>
                <div className={styles.arrival}>
                    <div className={styles.featuresdiv}>
                        Features
                    </div>
                    <h1>
                         From Planning to Arrival: A Complete Look at OrnaMap’s Features
                    </h1>

                </div>
                <div className={styles.ornamapfeatures}>
                    <div className={styles.feature}>
                        <div>
                            <h1>
                                Step-by-Step

                            </h1>
                            <p>
                            Clear directions for every step, turn, and transit connection - from start to finish.
                            </p>

                        </div>
                        <img src={mockup} alt="an image of a mock up iphone 15" />

                    </div>

                    <div className={styles.feature}>
                        <div>
                            <h1>
                            Ticketing

                            </h1>
                            <p>
                            Top up your Cowry wallet effortlessly and instantly access all your transit tickets.
                            </p>

                        </div>
                        <div className={styles.relat}> 
                            <img src={mockup2} alt="an image of a mock up iphone 15"  className={styles.img}/>
                            <div  className={styles.cowry}>
                                    <img src={mockup7}/>


                            </div>


                        </div>
/>

                    </div>

                    <div className={styles.feature}>
                        <div>
                            <h1>
                            Transit Options & Fare

                            </h1>
                            <p>
                            Check real-time fares across all transit options. And get the fastest & cheapest routes to your destinations - plan your trip and budget in seconds.
                            </p>

                        </div>
                        <img src={mockup3} alt="an image of a mock up iphone 15"  className={styles.img}/>

                    </div>


                    <div className={styles.feature}>
                        <div>
                            <h1>
                            Schedule

                            </h1>
                            <p>
                            Check for live departure and arrival times for all transit options - plan your journey and stay on schedule.
                            </p>

                        </div>
                        <img src={mockup4} alt="an image of a mock up iphone 15"  className={styles.img}/>

                    </div>



                    <div className={styles.feature}>
                        <div>
                            <h1>
                            Walk & Drive

                            </h1>
                            <p>
                            Get directions to and from any transit stop - whether you're walking or driving, OrnaMap will guide you every step of the way.
                            </p>

                        </div>
                        <img src={mockup5} alt="an image of a mock up iphone 15"  className={styles.img}/>

                    </div>


                    <div className={styles.feature}>
                        <div>
                            <h1>
                            Go!

                            </h1>
                            <p>
                            Hit the 'Go' button to kick off your trip! Whether you're taking the train, ferry, or bus, OrnaMap gets you moving with just one tap.
                            </p>

                        </div>
                        <img src={mockup6} alt="an image of a mock up iphone 15" />

                    </div>




                </div>

             </div>

          </section>
        </>
    )

}
export default Features