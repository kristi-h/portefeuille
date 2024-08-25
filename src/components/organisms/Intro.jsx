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
            </div>
        </div>
    )
}