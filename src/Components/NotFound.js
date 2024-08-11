import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Go back to <Link to='/'>Home Page</Link>.</p>
    </div>
  )
}

export default NotFound
