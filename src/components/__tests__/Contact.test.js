import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

/**Group multiple test cases into single block is known as describe. */
describe("Contact us  Page Test cases ",() => {
    test("Should load Contact component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button Contact component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should load submit text Contact component", () => {
        render(<Contact/>);
    
        const submit = screen.getByText("Submit")
    
        expect(submit).toBeInTheDocument();
    })
});

