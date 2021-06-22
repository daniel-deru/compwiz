//global imports
import React,{ useRef, useEffect } from 'react'

//import stylesheet
import "../css/Header.css"

//import icons
import { VscTriangleDown, VscSettingsGear } from "react-icons/vsc"

//import profile image
import profile from "../../resources/shredder.png"

// Component Imports
import Controls from './Controls'

const Header = () => {

    return (
        <div  id="header">
            <h1>CompWiz</h1>
            <Controls/>
            <div id="user-info">
                <span id="user-rank">123</span>
                <VscSettingsGear/>
                <span id="header-account">
                    <VscTriangleDown/>
                    <img src={profile} alt="" id="profile" />
                </span>
            </div>
        </div>
    )
}

export default Header
