import React from 'react'

export const metadata = {
  title: 'KillFood | About',
  description: 'KillFood About us',
}

function AboutLayout({ children }) {
  return (
    <div>
      <h1>About Layout</h1>
      {children}
    </div>
  )
}

export default AboutLayout
