import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from '../../App';
import {UserContext} from '../../utils/UserContext';
import ScoreBoard from '../ScoreBoard';
import ButtonActions from '../ButtonActions';

beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = () => {
    return {
      clearRect: jest.fn(),
      fillRect: jest.fn(),
      beginPath: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
      closePath: jest.fn(),
    };
  };
});

const mockContext= {
  score: 10,
  lives: 2,
  setScore: jest.fn(),
  setLives: jest.fn()
}

describe("App Component", ()=>{
  it('Render canvas element', ()=> {
    render(<UserContext.Provider value={mockContext}><App /></UserContext.Provider>);
  
    const canvas = screen.getByTestId("game-canvas");
    expect(canvas).toBeInTheDocument();
  })

  it('should click on start button to start the game and update the score and lives on scoreboard', ()=>{
    render(<UserContext.Provider value={mockContext}>
      <ScoreBoard />
      <ButtonActions />
    </UserContext.Provider>)

    const startBtn = screen.getByRole("button", {name: "Start"})

    fireEvent.click(startBtn);

    expect(startBtn).toBeInTheDocument();
    expect(mockContext.setScore).toHaveBeenCalledTimes(1);
    expect(mockContext.setLives).toHaveBeenCalledTimes(1);
  })

  it('should click on restart button to reset the game and update the default score and lives on scoreboard', ()=>{
    render(<UserContext.Provider value={mockContext}>
      <ScoreBoard />
      <ButtonActions />
      </UserContext.Provider>)

    const restartBtn = screen.getByRole("button", {name: "Restart"})

    fireEvent.click(restartBtn);

    expect(restartBtn).toBeInTheDocument();
    expect(mockContext.setScore).toHaveBeenCalledTimes(1);
    expect(mockContext.setLives).toHaveBeenCalledTimes(1);
  })

  it('should click on pause button to pause the game and update the score and lives on scoreboard', ()=>{
    render(<UserContext.Provider value={mockContext}>
      <ScoreBoard />
      <ButtonActions />
      </UserContext.Provider>)

    const pauseBtn = screen.getByRole("button", {name: "Pause"})

    fireEvent.click(pauseBtn);

    expect(pauseBtn).toBeInTheDocument();
    expect(mockContext.setScore).toHaveBeenCalledTimes(1);
  })

})


