import { Link } from 'react-router-dom'
import ornamaplogo from '/src/assets/svg/Header/Frame 20.svg'
import applelogo from '/src/assets/svg/Header/Group.svg'
import googleplaylogo from '/src/assets/svg/Header/Vector.svg'
import Headerstyles from '/src/assets/module_styles/header.module.css'
import dropwdownlogo from '/src/assets/svg/Header/fi_7996254.svg'


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
                                <li className={Headerstyles.home}><Link to="/" className={Headerstyles.link}>Home</Link></li>
                                <li className={Headerstyles.blog}><Link to="/privacy"  className={Headerstyles.link}>Privacy</Link></li>
                                <li className={Headerstyles.schedule}><Link to="/terms"  className={Headerstyles.link}>Terms</Link><img src={dropwdownlogo}/></li>
                                <li className={Headerstyles.faq}><Link to="/faqs"  className={Headerstyles.link}>FAQs</Link></li>
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

