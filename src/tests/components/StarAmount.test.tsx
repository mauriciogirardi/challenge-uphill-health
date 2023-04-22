import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { StarAmount } from "../../components/StarAmount";

describe("StarAmount", () => {
  it("renders without error", () => {
    render(<StarAmount values={32} />);

    const svg = screen.getByTestId("svg-star");

    expect(screen.getByText(32)).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  it("render just icon with value", () => {
    render(<StarAmount />);

    const svg = screen.getByTestId("svg-star");
    expect(svg).toBeInTheDocument();
  });
});
