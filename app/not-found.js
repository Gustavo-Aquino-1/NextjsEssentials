import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div>
      <h1>404 | Page Not Found</h1>
      <Link href='/'>Home</Link>
    </div>
  )
}

export default NotFound
