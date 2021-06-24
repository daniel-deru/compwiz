// react imports
import { useEffect, useState } from "react"


// stylesheet imports
import "../css/Theme.css"

//import icons
import { VscTriangleDown } from "react-icons/vsc"

const themes = ["cars", 'fashion', 'space', 'music', 'sport', 'nature', 'christmas']

const Theme = () => {
    const [displayTheme, setDisplayTheme] = useState("Theme")
    const [firstSelect, setFirstSelect] = useState(true)

    const getTheme = (e) => {

        if(!firstSelect) {
            console.log(e.target.value)
        }

        setFirstSelect(!firstSelect)
    }

    return (
        <div id="theme-container">

            <select name="theme-select" id="theme-select" className="header-select" onClick={(e) => getTheme(e)}> 
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
