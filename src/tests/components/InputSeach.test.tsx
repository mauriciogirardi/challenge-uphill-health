import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { InputSearch } from "../../components/InputSearch";

describe("InputSearch", () => {
  it("renders without error", () => {
    render(<InputSearch />);

    const svg = screen.getByTestId("icon-input");
    expect(svg).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should be able write", () => {
    render(<InputSearch />);

    const inputElement = screen.getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "test value input" } });
    expect(inputElement).toHaveValue("test value input");
  });
});
