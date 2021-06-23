// react imports
import { useEffect, useState } from "react"

// stylesheet imports
import "../css/Levels.css"

//import icons
import { VscTriangleDown } from "react-icons/vsc"
import { element } from "prop-types"


// this is static and only for testing purposes
const levels = [1, 2, 3, 4, 5, 6, 7]

const Levels = () => {
    const [displayLevel, setDisplayLevel] = useState("Levels")

    const getLevel = (e) => {
        console.log(e.target.value)
    }

    return (
        <div id="levels-container">

            <select name="levels-select" id="levels-select" className="header-select" onClick={e => getLevel(e)}>
                <option value="levels">Levels</option>
                {levels.map(element => {
                    return  <option value={element} onClick={() => {
                        setDisplayLevel(element)
                        }}>
                                {element}
                            </option>
                })}
                 <option value="random">random</option>
            </select>
        </div>
    )
}

export default Levels
