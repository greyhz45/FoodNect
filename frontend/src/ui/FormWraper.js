import React from 'react'

const FormWraper = (props) => {
    //{props.children} allows rendering of whatever children elements are placed inside this component
    //i.e.  <FormWraper>
    //          <div>
    //              <p>this is child inside the custom wraper container componnet.
    //                 Typical use case is creating a "Card" component to wrap elements
    //              </p>
    //          </div>
    //      </FormWraper>
  return (
    <>
        <div className="fn-signup-signin-wraper">
            {props.children}
        </div>
    </>
  )
}
export default FormWraper;
