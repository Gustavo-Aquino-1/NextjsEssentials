import React from 'react'
import Link from 'next/link'

function Home() {
  console.log('Server side')
  return (
    <>
      <div>KillFood</div>
      <Link href='/about'>About us</Link>
    </>
  )
}

export default Home

// Ctrl + E files
