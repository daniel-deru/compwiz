import React, { useEffect, useState } from 'react'

// import stylesheet
import "../css/SideBar.css"


const SideBar = () => {
    const [winHeight, setWinHeight] = useState(null)
    
    useEffect(() => {
        console.log(window.innerHeight)
        setWinHeight(window.innerHeight)
    })
    return (
        <div id="sidebar" height={`${winHeight} - 10vh`} >
            {winHeight}
        </div>
    )
}

export default SideBar
