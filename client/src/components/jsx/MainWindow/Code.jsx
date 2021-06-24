// react imports
import { useEffect, usestate, useRef } from "react"

//import stylesheets
import "../../css/MainWindowCSS/Code.css"





const Code = () => {
    const codeRef = useRef()

    // const getCode = (e) => {
    //     const characterCode = codeRef.current.innerText
    // }
    return (
        <div ref={codeRef} id="coding-area" contentEditable="true" /*onInput={(e) => getCode(e)}*/>
            
        </div>
    )
}

export default Code
