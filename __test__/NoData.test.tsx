import NoData from "@/components/NoData";
import { render, screen } from "@testing-library/react"

describe("NoData Component", () => {
    it("should render the component", () => {
        render(<NoData text={"123"}/>)

        const text = screen.getByTestId("text")
        //   <p className="uppercase text-base" data-testid="text">
        //     123
        //   </p>

        expect(text).toBeInTheDocument()
        expect(text.textContent).not.toEqual("1234")

        const text_2 = screen.getByText("Data")
        //   <p className="uppercase text-base" >
        //     Data
        //   </p>
        expect(text_2).toBeInTheDocument()
        expect(text_2.textContent).toEqual("Data")
        
    })

    // it("should render with text prop", () => {
    //     render(<NoData text="This is a test text" />)

    //     const text = screen.getByText("This is a test text")

    //     expect(text).toBeInTheDocument()
    //     expect(text.textContent).toEqual("This is a test text")
    // })
})