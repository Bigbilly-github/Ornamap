
import image from './images/Frame 9.svg'
import applelogo from './images/Group.svg'
import googleplaylogo from './images/Vector3.svg'
import herostyles from './hero.module.css'
function Hero (){


    return(
        <>
        <section>
            <div className={herostyles.herosection}>
                <div className={herostyles.hero}>
                    <div className={herostyles.herobody} >
                        <div className={herostyles.herobodydetails}>
                            <h1>
                            Plan every step of your journey
                            </h1>
                            <p>
                            OrnaMap app provides real-time schedules, step-by-step directions, and seamless ticketing for trains, ferries, and buses.
                            </p>

                            <button >
                                <img src={applelogo} className={herostyles.applelogo}/>
                                <img src={googleplaylogo} className={herostyles.googleplaylogo}/> 
                                Download App Now
                            </button>

                        </div>

                    </div>

            
                    <div className={herostyles.heroimage}>
                        <img src={image}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}
export default Hero