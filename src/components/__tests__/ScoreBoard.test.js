import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScoreBoard from "../ScoreBoard";
import {UserContext} from "../../utils/UserContext";

describe('ScoreBoard Component', ()=>{
    const defaultData = {score: 0, lives: 3};
    const mockData ={score: 30, lives: 2};

    it('render score board', ()=> {
        render ( <UserContext.Provider value={defaultData}>
                <ScoreBoard />
                </UserContext.Provider>);
      
        const scoreBoard = screen.getByTestId("score-board");
        expect(scoreBoard).toBeInTheDocument();
    })
      
    it('display default score on the board', ()=>{
    render(
        <UserContext.Provider value={defaultData}>
        <ScoreBoard />
        </UserContext.Provider>
    );
    
    const scoreEl = screen.getByTestId('score')
    
    expect(scoreEl).toHaveTextContent('Score: 0')
    })

    it('display the correct score on the board', ()=>{
        render(<UserContext.Provider value={mockData}>
            <ScoreBoard />
        </UserContext.Provider>)

        const scoreEl = screen.getByTestId("score");

        expect(scoreEl).toHaveTextContent("Score: 30");
    })

    it('display default lives on the board', ()=>{
        render(
            <UserContext.Provider value={defaultData}>
            <ScoreBoard />
            </UserContext.Provider>
        );
        
        const scoreEl = screen.getByTestId('lives')
        
        expect(scoreEl).toHaveTextContent('Lives: 3')
    })

    it('display the correct lives on the board', ()=>{
        render(<UserContext.Provider value={mockData}>
            <ScoreBoard />
        </UserContext.Provider>)

        const scoreEl = screen.getByTestId("lives");

        expect(scoreEl).toHaveTextContent("Lives: 2");
    })

})