//Global imports (React)
import { useEffect, useState } from "react"

//import stylesheets
import "../../css/MainWindowCSS/MainWindow.css"

// Import Components
import Code from "./Code"
import View from "./View"

const MainWindow = () => {
    

    return (
        
        <div id="main-window">
            <Code/>
            <View/>
        </div>
    )
}

export default MainWindow
