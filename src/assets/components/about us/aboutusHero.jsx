
import styles from "/src/assets/module_styles/body.module.css"
import image from "/src/assets/svg/about us/Image.svg"

function AboutUsHero (){

    return(
        <>
        <div className={styles.AboutUsHero1}>
            <h1>
                 Our Mission
            </h1>
            <p>
                 Our mission is to empower seamless and efficient travel experiences for everyone by providing innovative, real-time transit navigation solutions.
            </p>
        </div>


        <div className={styles.AboutUsHero2}>
             <img src={image}/>
             <div>
                <h2>
                     About Us
                </h2>
                <p>
                    OrnaMap is a mobile app transforming transit navigation in Nigeria by providing real-time access to train and ferry schedules, fare information, route suggestions, and navigation for key services like the Lagos Blue Line Metro, Red Line Train, Lagos Ferry Service, and Lagos-Ibadan Train. Since January 2021, OrnaMap has simplified travel planning, empowering thousands to make informed, confident journey decisions.<br/><br/><br/>With the added convenience of Cowry Card top-ups directly in the app, users can enjoy seamless, cashless commutes across trains, ferries, and buses. OrnaMap is committed to making travel easy, accessible, and reliable for all.
                </p>


             </div>

        </div>

        </>
    )

}
export default AboutUsHero