
import image from '../Hero section/images/Frame 9.svg'
import applelogo from '../Hero section/images/Group.svg'
import googleplaylogo from '../Hero section/images/Vector.svg'
function Hero (){


    return(
        <>
        <section>
            <div>
                <div>
                    <div>
                        <h1>
                        Plan every step of your journey
                        </h1>
                        <p>
                        OrnaMap app provides real-time schedules, step-by-step directions, and seamless ticketing for trains, ferries, and buses.
                        </p>

                        <button >
                            <img src={applelogo} />
                            <img src={googleplaylogo} /> 
                            Download App Now
                        </button>
                    </div>

                </div>
                <div>
                    <img src={image}/>
                </div>
            </div>
        </section>
        </>
    )

}
export default Hero