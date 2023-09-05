import React from 'react'

const Container = ({children}) => {
  return (
        <div className='cardbox'>
            <div className="card">{children}</div>
        </div>
  )
}

export default Container