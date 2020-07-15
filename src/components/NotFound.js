import React from 'react'
import { Link } from '@reach/router'

const NotFound = () => {
    return (
        <div>
            <h1>That Page Doesn't Exist.</h1>
            <Link to = "/"><button>Go To Home Page</button></Link>
        </div>
    )
}

export default NotFound
