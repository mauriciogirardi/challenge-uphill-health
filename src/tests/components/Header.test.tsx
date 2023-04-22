import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("Header", () => {
  it("renders without error", () => {
    render(<Header />);

    const imgElement = screen.getByRole("img");
    const inputElement = screen.getByPlaceholderText("Search");

    expect(imgElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
});
