import React from 'react'

const ScoreBoard = () => {
  return (
    <div className='my-2 flex justify-around py-4 border-1 rounded-md shadow-md sm:text-xl md:text-2xl text-black'>
      <p>Score: 50</p>
      <p>Lives: 2</p>
    </div>
  )
}

export default ScoreBoard