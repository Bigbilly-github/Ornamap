import Hero from "../../components/landing page/hero"
import Header from "../../components/global/Header"
import UrbanMobility from "../../components/landing page/urbanmobility"
import Features from "../../components/landing page/features"
import Search from "../../components/landing page/search"




function Homepage (){

    return(
        <>
          <Header/>
          <main>
                <Hero/>
                <UrbanMobility/>
                <Features/>
                <Search/>

          </main>


      

                         
        

        </>
    )

}
export default Homepage 