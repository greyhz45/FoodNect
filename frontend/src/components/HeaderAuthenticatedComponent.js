//header component with authenticated navigation links (nav links to access authenticated resources: settings, meetings, friends list, ...)
//inject to HeaderWraperComponent if not authenticated

import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {fames} from "@fortawesome/free-solid-svg-icons";
import {faGoogle, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function HeaderAuthenticatedComponent() {
  return (
    <>
        <ul>
            <li>
                <span className="nav nav-item" alt="Message">
                    <FontAwesomeIcon icon="fa-solid fa-envelope-open-text" />
                </span>
            </li>
            <li>
                <span className="nav nav-item" alt="Notification">
                    <FontAwesomeIcon icon="fa-solid fa-bell-on" />
                </span>
            </li>
            <li>
                <span className="nav nav-item" alt="Meeting">
                    <FontAwesomeIcon icon="fa-solid fa-calendar-lines" />
                </span>
            </li>
            <li>
                <span className="nav nav-item" alt="Setting">
                    <FontAwesomeIcon icon="fa-solid fa-sliders-up" />
                </span>
            </li>
        </ul>
    </>
  )
}
