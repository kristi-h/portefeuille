import React, {useState} from "react"
import "./ProjectCard.css"
import {ProjectData} from "./ProjectData"

export default function ProjectCard(){

    const projectEle = () => {
        return ProjectData.map((project, index)=> {
            return (
                <div key={index} className="project-container">
                    <div className="project-preview">
                        <img src={project.image} />
                    </div>
                    <div className="project-details">
                        <div className="metadata">{project.metadata}</div>
                        <div className="title">{project.title}</div>
                        <div className="subtitle">{project.subtitle}</div>
                        <div className="body">{project.body}</div>
                    </div>
                </div>
            )
    })
    }

    return(
        <div>
            {projectEle()}
        </div>
    )
} 