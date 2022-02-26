//footer component common to every page including authorized or non-authorized page

import React from 'react'

function FooterComponent() {
  const year = (new Date()).getFullYear.toString
  return (
    <>
      <div className="fn-footer">
        <div className="container">
            <p>copy right ({year})</p>
        </div>
      </div>
    </>
  )
}
export default FooterComponent;