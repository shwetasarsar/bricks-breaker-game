import { render, screen } from "@testing-library/react"
import ButtonActions from "../ButtonActions"

it ('display start button on the page', ()=>{
    render(<ButtonActions />);

    const startBtn = screen.getByRole("button", {name: "Start"});
    expect(startBtn).toBeInTheDocument();
})

it ('display restart button on the page', ()=>{
    render(<ButtonActions />);

    const restartBtn = screen.getByRole("button", {name: "Restart"});
    expect(restartBtn).toBeInTheDocument();
})
it ('display pause button on the page', ()=>{
    render(<ButtonActions />);

    const pauseBtn = screen.getByRole("button", {name: "Pause"});
    expect(pauseBtn).toBeInTheDocument();
})