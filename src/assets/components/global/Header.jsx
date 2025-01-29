
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

