
import image from '/src/assets/svg/Faqs/Image.svg'
import styles from '/src/assets/module_styles/body.module.css'

function FaqsHero(){
    const accordionData = [
        {
          id: "first",
          question: "What is OrnaMap?",
          answer:
            "OrnaMap is a mobile app designed to help you plan your train and ferry trips in Nigeria. The app allows you to search for train and ferry schedules, find suggested means of transport to the train station or harbor, and even book your trip in advance. With OrnaMap, you can easily plan your journey and enjoy the scenic views on your travels.",
        },
        {
          id: "second",
          question: "How can I fund my Cowry card using OrnaMap?",
          answer:
            "You can easily fund your Cowry card through the Ornamap app. Just head to the 'Cowry Topup' button, enter the amount, phone number, and follow the steps to complete your payment. It's that simple!",
        },
        {
          id: "third",
          question: "Does OrnaMap show real-time schedules for buses, ferries, and trains?",
          answer:
            "Yes, OrnaMap provides real-time schedules, so you can see up-to-date departure times for buses, ferries, and trains. No more guessing when the next one will arrive!",
        },
      ];

    return(
        <>
        <div className={styles.FaqsHeroimage}>
            <img src={image}/>
        </div>

        <div className={styles.FaqsHerotext}>
            <h1>
            Frequently Asked Questions
            </h1>
            <p>
               Got Questions? Answers and advice from the OrnaMap Team
            </p>
        </div>

        <div className={styles.faqfeatures}>
            <div className={styles.faqfeaturesdiv}>
                        <div className={styles.faqfeaturesleft}>
                            <h2>
                            Some of the things you may want to know
                            </h2>
                            <p>
                            We've answered them so you don't have to ask.
                            </p>
                        </div>
                        <div className={styles.faqfeaturesright}>
                           
                            <ul className={styles.accordion}>
                            { accordionData.map((item)=>
                                    <li>
                                        <input type="radio" name="accordion" id={item.id} />
                                        <label htmlFor={item.id}>{item.question}</label>
                                        <div className={styles.content}> 
                                            <p>
                                            {item.answer}
                                            </p>

                                        </div>


                                    </li>

                            )}      
                            </ul>
                          
                        </div>
                    </div>

        </div>

       

        </>
    )

}
export default FaqsHero