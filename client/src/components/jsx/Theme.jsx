// react imports
import { useEffect, useState } from "react"


// stylesheet imports
import "../css/Theme.css"

//import icons
import { VscTriangleDown } from "react-icons/vsc"

const themes = ["cars", 'fashion', 'space', 'music', 'sport', 'nature', 'christmas']

const Theme = () => {
    const [displayTheme, setDisplayTheme] = useState("Theme")

    return (
        <div id="theme-container">
            {/* <div id="theme-default-container">
                <VscTriangleDown className="controls-triangle"/>
                <div id="theme">{displayTheme}</div>
            </div>

            <ul id="theme-list">
                {themes.map(element => {
                    return <li onClick={() => setDisplayTheme(element)}>
                        {element}
                    </li>
                })}
                <li onClick={() => setDisplayTheme("Random")}>Random</li>
            </ul> */}

            <select name="theme-select" id="theme-select" className="header-select">
                <option value="theme-option">Theme</option>
                {themes.map(element => {
                    return  <option value={element} onClick={() => {setDisplayTheme(element)}}>
                                {element}
                            </option>
                })}
                 <option value="random">random</option>
            </select>
        </div>
    )
}

export default Theme
