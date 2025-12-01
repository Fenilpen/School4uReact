import React from 'react'

function Layout({children}) {
   console.log(children);
  return (
    <div>
      {
        children
      }
    </div>
  )
}

export default Layout
