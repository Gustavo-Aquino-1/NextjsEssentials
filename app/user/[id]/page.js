import { useParams } from 'next/navigation'
import React from 'react'

function User({ params: { id } }) {
  return (
    <div>
      <p>User {id} acess this page</p>
    </div>
  )
}

export default User
