import React, {useEffect, useRef} from "react";
import ScoreBoard from "./components/ScoreBoard";
import ButtonActions from "./components/ButtonActions";
import { createInitialBall, createInitialPaddle, createInitialBricks, brickContainer} from "./components/createObjects";
import { drawBall, drawPaddle, drawBricks } from "./components/drawObjects";


function App() {
  const canvasRef = useRef(null);
  const ballRef = useRef(createInitialBall());
  const paddleRef = useRef(createInitialPaddle());
  const bricksRef = useRef(createInitialBricks());

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

  }, [])

  return (
    <div className="w-6/12 mx-auto mt-2 box-border">
     <ScoreBoard/>
      <canvas ref={canvasRef} className="block w-[100%] h-[100%] rounded-lg shadow-md"></canvas>
     <ButtonActions />
    </div>
  );
}

export default App;
