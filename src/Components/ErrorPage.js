import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! Something Went Wrong.</h1>
      <p>Go back to the <Link to='/'>Home Page.</Link></p>
    </div>
  )
}

export default ErrorPage
