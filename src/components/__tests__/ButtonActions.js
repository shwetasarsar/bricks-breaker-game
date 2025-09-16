import { render, screen } from "@testing-library/react"
import ButtonActions from "../ButtonActions"
import { UserProvider } from "../../utils/UserContext";

describe("Button Action Component", ()=>{
    const mockContext= {
        score: 0,
        lives: 3,
        setScore: jest.fn(),
        setLives: jest.fn()
    }
    it ('display start button on the page', ()=>{
        render(<UserProvider value={mockContext}><ButtonActions /></UserProvider>);
    
        const startBtn = screen.getByRole("button", {name: "Start"});
        expect(startBtn).toBeInTheDocument();
    })
    
    it ('display restart button on the page', ()=>{
        render(<UserProvider value={mockContext}><ButtonActions /></UserProvider>);
    
        const restartBtn = screen.getByRole("button", {name: "Restart"});
        expect(restartBtn).toBeInTheDocument();
    })
    it ('display pause button on the page', ()=>{
        render(<UserProvider value={mockContext}><ButtonActions /></UserProvider>);
    
        const pauseBtn = screen.getByRole("button", {name: "Pause"});
        expect(pauseBtn).toBeInTheDocument();
    })
})

