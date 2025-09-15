import React, {useContext} from 'react';
import UserContext from '../utils/UserConext';

const Button =({onClick, btnName, className})=>{
    return <button className={`sm:text-sm md:text-[20px] border border-gray-400 rounded-lg w-[92px] py-2 hover:bg-gray-500 hover:text-white ${className}`} onClick={()=>onClick()}>
        {btnName}
    </button>
}

const ButtonActions = () => {
    const {lives, setScore, setLives} = useContext(UserContext);

    const pauseGame =()=>{
        if(lives > 0){
            setScore(prev => prev + 10);
        }
    }

    const startGame =()=>{
        if(lives > 0){
            setLives(prev => prev - 1);
            setScore(prev => prev + 10);
        }
    }

    const restartGame =()=>{
        setLives(3);
        setScore(0);
    }
    return (
        <div className='mt-2 flex justify-evenly p-2'>
            <Button onClick={pauseGame} btnName="Pause" />
            <Button onClick={startGame} btnName="Start" className={(lives <= 0) ? 'cursor-default pointer-events-none' : 'cursor-pointer pointer-events-auto'}/>
            <Button onClick={restartGame} btnName="Restart" />
        </div>
    )
}

export default ButtonActions