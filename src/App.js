import React, {useEffect, useRef, useState} from "react";
import UserContext from "./utils/UserConext";
import ScoreBoard from "./components/ScoreBoard";
import ButtonActions from "./components/ButtonActions";
import { createInitialBall, createInitialPaddle, createInitialBricks, brickContainer} from "./components/createObjects";
import { drawBall, drawPaddle, drawBricks } from "./components/drawObjects";


function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const canvasRef = useRef(null);
  const ballRef = useRef(createInitialBall());
  const paddleRef = useRef(createInitialPaddle());
  const bricksRef = useRef(createInitialBricks());

  const keyDownHandler =(e)=>{
      if(e.key === 'ArrowLeft') paddleRef.current.speed = -6;
      if(e.key === 'ArrowRight') paddleRef.current.speed = 6;
  }

  const keyUpHandler =(e)=>{
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') paddleRef.current.speed = 0;
  }

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const ball = ballRef.current;
    const paddle = paddleRef.current;
    const bricks = bricksRef.current;

    for(let row=0; row < brickContainer.row; row++){
      for(let col=0; col< brickContainer.col; col++){
        bricks.push({
          x: col * (brickContainer.width + brickContainer.padding) + brickContainer.offsetLeft,
          y: row * (brickContainer.height + brickContainer.padding) + brickContainer.offsetTop,
          width: brickContainer.width,
          height: brickContainer.height,
          isDestroyed: false
        })
      }
    }

    drawBall(ctx, ball);
    drawPaddle(ctx, paddle);
    drawBricks(ctx, bricks);

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler)

  }, [])


  return (
    <UserContext.Provider value={{score: score, lives: lives, setScore, setLives}}>
    <div data-testid="game-container" className="w-6/12 mx-auto mt-2 box-border">
     <ScoreBoard/>
      <canvas data-testid="game-canvas" ref={canvasRef} className="block w-[100%] h-[100%] rounded-lg shadow-md"></canvas>
     <ButtonActions />
    </div>
    </UserContext.Provider>
  );
}

export default App;
