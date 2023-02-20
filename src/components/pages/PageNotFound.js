import React from "react";
import "./PageNotFound.css"
import {Button} from 'react-bootstrap'


function PageNotFound() {
    return(
        <div className="hide-navbar">
            <h1>Page you are looking does not exists</h1>
            <br/>
            <Button variant="primary">Primary</Button>
            <a href="/">Home</a>
        </div>
    )
}

export default PageNotFound
