import React from "react"
import "./Intro.css"

export default function Intro(){
    return(
        <div className="main-container">
            <div className="greeting">
                Heya, visitor!
            </div>
            <div className="subtitle">
                Kristi here
                <div className="description">
                    <i>Currently on the market for new opportunities</i>
                    <br></br>
                    <br></br>
                    <br></br>
                    Full stack software developer with a particular interest on creating crisp, clean, efficient UI. Minimalist yet impactful. Hones in focus where needed to direct user towards better UX.
                </div>
                <div className="contact">
                    <a href="mailto:kristi.y.l.h@gmail.com">
                        <div className="button">
                            <img src="images/mail.svg" />
                                Say "Hi"!
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/kristi-h-4542b38a/" target="none">
                        <div className="button">
                            <img src="images/linkedin.svg" />
                            Link me!
                        </div>
                    </a>
                </div>
                    
            </div>
        </div>
    )
}