import ProductItem from "./ProductItem";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ProductItem", () => {
  test("has two buttons", () => {
    render(<ProductItem item={{name: "cookie", price: 1}}></ProductItem>)
    const [removeOne, addOne] = screen.getAllByRole("button")
    expect(addOne).toBeInTheDocument()
    expect(removeOne).toBeInTheDocument()
  })
  test("can increase amount with button", () => {
    // arange
    render(<ProductItem item={{name: "cookie", price: 1}}></ProductItem>)
    const [removeOne, addOne] = screen.getAllByRole("button")

    // act
    userEvent.click(addOne)

    // assert
    expect(screen.getByDisplayValue(1)).toBeInTheDocument()
  })
  test("can not decrease below 0", () => {
    // arange
    render(<ProductItem item={{name: "cookie", price: 1}}></ProductItem>)
    const [removeOne, addOne] = screen.getAllByRole("button")

    // act
    userEvent.click(removeOne)

    // assert
    expect(screen.getByDisplayValue(0)).toBeInTheDocument()
  })
  test("can decrease amount with button", () => {
    // arange
    render(<ProductItem item={{name: "cookie", price: 1}}></ProductItem>)
    const [removeOne, addOne] = screen.getAllByRole("button")

    // act
    userEvent.click(addOne)
    userEvent.click(removeOne)

    // assert
    expect(screen.getByDisplayValue(0)).toBeInTheDocument()
  })
})