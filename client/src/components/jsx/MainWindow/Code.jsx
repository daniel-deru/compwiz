// react imports
import { useEffect, useState, useRef } from "react"

//import stylesheets
import "../../css/MainWindowCSS/Code.css"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"


//editor imports
import "codemirror/mode/javascript/javascript"

// import the code editor
import { Controlled as Editor} from "react-codemirror2"





const Code = () => {
    const codeRef = useRef()
    const [lines, setLines] = useState([""])
    const [code, setCode] = useState("")
    
    function handleChange(editor, data, value){
        setCode(value)
    }


    return (
        <div id="coding-area" >
            {/* <div id="main-code"> */}
                <Editor
                    onBeforeChange={handleChange}
                    options={{
                        mode: "javascript",
                        theme: "material",
                        lineNumbers: true,
                        lineWrapping: true,
                        lint: true
                    }}
                    value={code}
                    className="editor"
                    
                
                />
            {/* </div> */}
        </div>
    )
}

export default Code
