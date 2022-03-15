//header component with authenticated navigation links (nav links to access authenticated resources: settings, meetings, friends list, ...)
//inject to HeaderWraperComponent if not authenticated

import React, {useContext} from 'react';
import {FaEnvelopeOpenText, FaBell, FaCalendarAlt, FaSignOutAlt} from "react-icons/fa"
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


export default function HeaderAuthenticatedComponent() {
    //signout: simply emptying jwt token for now
    const {setJwtToken} = useContext(AuthContext)
    const navigateTo = useNavigate()

    const handleSignOut = () => {
        setJwtToken("");
        //navigate to home page
        navigateTo("/")
        //for some reason page needs to reload in order to hide authenticated menus
        //probably prop passing issue: will fix later
        navigateTo(0)
        
    }



  return (
    <>
        <ul className="fn-tools-bar">
            <li className="">
                <FaEnvelopeOpenText />
            </li>
            <li>
                <FaBell />
            </li>
            <li>
                <FaCalendarAlt />
            </li>
            <li>
                <FaSignOutAlt onClick={handleSignOut}/>
            </li>
        </ul>
    </>
  )
}
