import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NotFoundContent } from "../../components/NotFoundContent";

describe("NotFoundContent", () => {
  it("renders without error", () => {
    render(<NotFoundContent message="test message" />);

    const svg = screen.getByTestId("svg-warning");

    expect(screen.getByText("test message")).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });
});
