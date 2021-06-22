// stylesheet imports
import "../css/Theme.css"

//import icons
import { VscTriangleDown } from "react-icons/vsc"

const Theme = () => {
    return (
        <div id="theme-container">
            <div id="theme-default-container">
                <VscTriangleDown className="controls-triangle"/>
                <div id="theme">Theme</div>
            </div>

            <ul id="theme-list">
                <li>cars</li>
                <li>fashion</li>
                <li>space</li>
                <li>music</li>
                <li>sport</li>
                <li>nature</li>
                <li>christmas</li>
            </ul>
        </div>
    )
}

export default Theme
