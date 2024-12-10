import ornamaplogo from './images/Frame 20.svg'
import applelogo from './images/Group.svg'
import googleplaylogo from './images/Vector.svg'
import Headerstyles from '../Header/header.module.css'
import dropwdownlogo from './images/fi_7996254.svg'
function Header (){


    return(
        <>
        <header>
            <div className={Headerstyles.header}>
                    <div className={Headerstyles.container}>
                        <div>
                            <img src={ornamaplogo} ></img>
                        </div>
                        <nav className={Headerstyles.nav}>
                            <ul>
                                <li className={Headerstyles.home}>Home</li>
                                <li className={Headerstyles.blog}>Blog</li>
                                <li className={Headerstyles.schedule}>Schedule <img src={dropwdownlogo}/></li>
                                <li className={Headerstyles.faq}>FAQs</li>
                            </ul>
                            
                        </nav>
                        <button >
                            <img src={applelogo} className={Headerstyles.applelogo}/>
                            <img src={googleplaylogo} className={Headerstyles.googleplaylogo}/> 
                            Download App Now
                        </button>

                    </div>

            </div>
            
        </header>
        </>
    )

}
export default Header