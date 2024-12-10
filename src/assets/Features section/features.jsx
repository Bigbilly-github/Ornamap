
import train from '../Features section/images/Train.svg'
import ferry from '../Features section/images/Ferry.svg'
import bus from '../Features section/images/Bus.svg'

function Features (){


    return(
        <>
        <div>
            <div>
                <h2>
                Urban Mobilities we provide solutions to
                </h2>
                <p>
                OrnaMap simplifies your city exploration. Easily switch between trains, buses, and ferries with a tap.
                </p>
            </div>
            <div>
                <div>
                    <h3>
                    Train
                    </h3>
                    <p>
                    OrnaMap helps you track live train times and plan your perfect route in seconds. See real-time arrivals, platform changes, and service updates for a stress-free journey.
                    </p>
                </div>
                <div>
                    <img src={train}/>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h3>
                        Ferry
                        </h3>
                        <p>
                        OrnaMap shows you real-time ferry schedules and helps you plan your waterway trips without the guesswork.
                        </p>
                    </div>
                    <div>
                        <img src={ferry}></img>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>
                        Bus
                        </h3>
                        <p>
                        Navigate your bus journey with ease using live schedules and route mapping on OrnaMap for a hassle-free commute.
                        </p>
                    </div>
                    <div>
                        <img src={bus}></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default Features