// stylesheet imports
import "../css/Levels.css"

//import icons
import { VscTriangleDown } from "react-icons/vsc"

const Levels = () => {
    return (
        <div id="levels-container">
            <div id="levels-default-container">
                <VscTriangleDown className="controls-triangle"/>
                <div id="levels">Levels</div>
            </div>

            <ul id="levels-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
        </div>
    )
}

export default Levels
