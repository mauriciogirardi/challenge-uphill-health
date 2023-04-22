import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Loading } from "../../components/Loading";

describe("Loading", () => {
  it("renders without error", () => {
    render(<Loading title="Loading..." />);

    const svg = screen.getByTestId("icon-loading");
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  it("render just icon without title", () => {
    render(<Loading />);

    const svg = screen.getByTestId("icon-loading");
    expect(svg).toBeInTheDocument();
  });

  it("should be able pass to props", () => {
    render(<Loading color="blue500" size={50} />);
    const svg = screen.getByTestId("icon-loading");

    expect(svg).toHaveAttribute("fill", "#013ca3");
    expect(svg).toHaveAttribute("width", "50");
    expect(svg).toHaveAttribute("height", "50");
  });
});
