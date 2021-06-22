// stylesheet imports
import "../css/Topic.css"

//import icons
import { VscTriangleDown } from "react-icons/vsc"

const Topic = () => {
    return (
        <div id="topic-container">
            <div id="topic-default-container">
                <VscTriangleDown className="controls-triangle"/>
                <div id="topic">Topic</div>
            </div>

            <ul id="topic-list">
                <li>math</li>
                <li>physics</li>
                <li>biology</li>
                <li>accounting</li>
                <li>cooking</li>
                <li>IT</li>
            </ul>
        </div>
    )
}

export default Topic
