import ornamaplogo from './images/Frame 20.jpg'
import applelogo from './images/fi_731985.png'
import googleplaylogo from './images/Vector.png'
function Header (){


    return(
        <>
        <header>
            <div>
                    <div>
                        <div>
                            <img src={ornamaplogo}></img>
                        </div>
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>Schedule</li>
                                <li>FAQs</li>
                            </ul>
                            
                        </nav>
                        <button class="hero-btn">
                            <img src={applelogo} />
                            <img src={googleplaylogo}/> 
                            Download App Now
                        </button>

                    </div>

            </div>
            
        </header>
        </>
    )

}
export default Header