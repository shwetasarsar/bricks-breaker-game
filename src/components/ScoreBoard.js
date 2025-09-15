import React, {useContext} from 'react'
import UserContext from '../utils/UserConext'

const ScoreBoard = () => {
  const {score, lives} = useContext(UserContext)
  return (
    <div className='my-2 flex justify-around py-4 border-1 rounded-md shadow-md sm:text-xl md:text-2xl text-black'>
      <p>Score: {score}</p>
      <p>Lives: {lives}</p>
    </div>
  )
}

export default ScoreBoard