import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from '../../App';
import UserContext from '../../utils/UserConext';
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

const mockSetLives = jest.fn();
const mockSetScore = jest.fn();
const mockContext ={score: 10, lives: 2, setScore: mockSetScore, setLives: mockSetLives};

describe("App Component", ()=>{
  it('Render canvas element', ()=> {
    render(<App />);
  
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
    expect(mockSetLives).toHaveBeenCalledTimes(1);
    expect(mockSetLives).toHaveBeenCalledTimes(1);
  })

  it('should click on restart button to reset the game and update the default score and lives on scoreboard', ()=>{
    render(<UserContext.Provider value={mockContext}>
      <ScoreBoard />
      <ButtonActions />
    </UserContext.Provider>)

    const restartBtn = screen.getByRole("button", {name: "Restart"})

    fireEvent.click(restartBtn);

    expect(restartBtn).toBeInTheDocument();
    expect(mockSetLives).toHaveBeenCalledTimes(1);
    expect(mockSetLives).toHaveBeenCalledTimes(1);
  })

  it('should click on pause button to pause the game and update the score and lives on scoreboard', ()=>{
    render(<UserContext.Provider value={mockContext}>
      <ScoreBoard />
      <ButtonActions />
    </UserContext.Provider>)

    const pauseBtn = screen.getByRole("button", {name: "Pause"})

    fireEvent.click(pauseBtn);

    expect(pauseBtn).toBeInTheDocument();
    expect(mockSetScore).toHaveBeenCalledTimes(1);
  })

})


