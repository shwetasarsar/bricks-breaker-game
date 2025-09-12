import React from 'react';

const Button =({onClick, btnName})=>{
    return <button className="sm:text-sm md:text-[20px] border border-gray-400 rounded-lg w-[92px] py-2 hover:bg-gray-500 hover:text-white" onClick={()=>onClick()}>
        {btnName}
    </button>
}

const ButtonActions = () => {
    const pauseGame =()=>{
        // console.log("pause the game...")
    }

    const startGame =()=>{
        // console.log("start the game...")
    }

    const restartGame =()=>{
        // console.log("reset the game...")
    }
    return (
        <div className='mt-2 flex justify-evenly p-2'>
            <Button onClick={pauseGame} btnName="Pause" />
            <Button onClick={startGame} btnName="Start" />
            <Button onClick={restartGame} btnName="Restart" />
        </div>
    )
}

export default ButtonActions