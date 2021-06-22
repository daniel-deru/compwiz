// import stylesheet
import "../css/Controls.css"

// React Imports
import { useState } from "react"

// Component Imports
import Levels from "./Levels"
import Theme from "./Theme"
import Topic from "./Topic"

const Controls = () => {
    return (
        <div id="header-controls">
            <Levels/>
            <Theme/>
            <Topic/>
        </div>
    )
}

export default Controls
