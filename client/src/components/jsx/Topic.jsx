// react imports
import { useEffect, useState } from "react"

// stylesheet imports
import "../css/Topic.css"

//import icons
import { VscTriangleDown } from "react-icons/vsc"


// this is static and only for display purposes
const topics = ["math", "physics", "biology", "accounting", "cooking", "IT"]

const Topic = () => {
    const [displayTopic, setDisplayTopic] = useState("Topics")

    return (
        <div id="topic-container">
           

            <select name="topic-select" id="topic-select" className="header-select">
                <option value="topic-option">Topic</option>
                {topics.map(element => {
                    return  <option value={element} onClick={() => {setDisplayTopic(element)}}>
                                {element}
                            </option>
                })}
                 <option value="random">random</option>
            </select>
        </div>
    )
}

export default Topic
