import Button from "@/components/Button";
import { render, screen } from "@testing-library/react";

const mockFn = jest.fn()

describe("button component", () => {
    it("shoud render", () => {
        render(<Button />)

        const button = screen.getByTestId("btn")

        expect(button).not.toBeNull()
        expect(button).toBeInTheDocument()
    })

    it("shoud render with props title", () => {
        render(<Button title="Close" />)

        const button = screen.getByRole("button", { name: "Close" })

        expect(button).not.toBeNull()
        expect(button).toBeInTheDocument()
        expect(button.textContent).toEqual("Close")
        expect(button.textContent).not.toEqual("Closed")
    })

    it("button should be clickable", () => {
        mockFn.mockClear();

        render(<Button title="Close" onClick={mockFn}/>)

        const button = screen.getByRole("button", { name: "Close" })
        // <button
        //     onClick={onClick}
        // >
        //     Close
        // </button>

        expect(button).not.toBeNull()
        expect(button).toBeInTheDocument()
        expect(button.textContent).toEqual("Close")
        
        expect(mockFn).toHaveBeenCalledTimes(0);

        button.click()
        expect(mockFn).toBeCalledTimes(1)
    })
})