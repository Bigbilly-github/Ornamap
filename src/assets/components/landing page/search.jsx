import image from '/src/assets/svg/landingpage/search-mockup.svg'
import styles from '/src/assets/module_styles/search.module.css'





function Search (){

    return(
        <>
            <section className={styles.Search}>
                <div className={styles.searchdiv}>
                    <h1>
                    How to get started
                    </h1>
                    <div className={styles.searchdetailsdiv}>
                            <div className={styles.searchdetails}>
                                
                                <div>
                                    <h2>
                                    Search

                                    </h2>
                                    <p>
                                    Enter your destination in the 'Where to?' field. Your current location will be selected by default, but you can edit it if needed.
                                    </p>
                                </div>
                                <img src={image} alt="image of a mockup iphone" />

                            </div>


                    </div>

                </div>

            </section>
        </>
    )

}
export  default Search