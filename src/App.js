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

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

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

    const keyDownHandler =(e)=>{
      if(e.key === 'ArrowLeft') paddleRef.current.speed = -6;
      if(e.key === 'ArrowRight') paddleRef.current.speed = 6;
    }

    const keyUpHandler =(e)=>{
      if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') paddleRef.current.speed = 0;
    }

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    const draw =()=>{
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBall(ctx, ball);
      drawPaddle(ctx, paddle);
      drawBricks(ctx, bricks);
    }

    const update =()=>{
      //move paddle
      paddle.x += paddle.speed
      if(paddle.x < 0 ) paddle.x= 0;
      if(paddle.x + paddle.width > canvas.width) paddle.x = canvas.width - paddle.width;

      //move ball
      ball.x += ball.speedX;
      ball.y += ball.speedY;

      //bounce off wall
      if(ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0){
        ball.speedX = -ball.speedX;
      }
      if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
        ball.speedY = -ball.speedY;
      }
    }

    const collision =()=>{
      bricks.forEach((brick)=>{
        if(ball.x + ball.radius > brick.x && brick.isDestroyed !== true){
          brick.isDestroyed = true
          setScore(prev => prev + 10)
        }
      })
    }

    const gameLoop =()=>{
      draw();
      update();
      collision();
      requestAnimationFrame(gameLoop);
    }

    gameLoop();

    return ()=> {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };

  }, [])


  return (
    <UserContext.Provider value={{score: score, lives: lives, setScore, setLives}}>
    <div data-testid="game-container" className="w-6/12 mx-auto mt-2 box-border">
     <ScoreBoard/>
      <canvas data-testid="game-canvas" ref={canvasRef} className="block w-[100%] h-[100%] rounded-lg shadow-md bg-black"></canvas>
     <ButtonActions />
    </div>
    </UserContext.Provider>
  );
}

export default App;
