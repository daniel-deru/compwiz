// react imports
import { useEffect, useState, useRef } from "react"

//import stylesheets
import "../../css/MainWindowCSS/Code.css"





const Code = () => {
    const codeRef = useRef()
    const [lines, setLines] = useState([""])
    

    const getCode = (e) => {
        const characterCode = e.target.textContent
        const getNewLine = /\r*\n/g
        const no_of_lines = characterCode.split(getNewLine)
        setLines(no_of_lines)
        console.log(no_of_lines)
        // console.log(characterCode)
    }

    // const renderLines = (currentLines) => {
    //     for(let i = 0; i <= currentLines; i++){
    //         return <li></li>
    //     }
    // }
    // console.log(lines)
    return (
        <div ref={codeRef} id="coding-area"  >
            <div id="line-no">
                <ol>
                    {/* {lines.map(elements => {
                        return <li></li>
                    })} */}
                </ol>
            </div>
            <div id="main-code" contentEditable='true' onInput={(e) => getCode(e)}></div>
            {/* <textarea name="main-code" id="main-code" cols="30" rows="10" onChange={(e) => getCode(e)}></textarea> */}
        </div>
    )
}

export default Code
