import React from 'react'
import Header from './Header'

export default function DefaultLayoutOnly({ children}) {
  return (
    <div>
        <Header />
        <div className = 'container'>
                {children}
        </div>
    </div>
  )
}
