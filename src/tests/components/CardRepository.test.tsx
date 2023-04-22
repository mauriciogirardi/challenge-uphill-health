import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardRepository } from "../../components/CardRepository";

const data = {
  id: "4",
  name: "Repo 01",
  description: "About Repo 01",
  stargazers: {
    totalCount: 12,
  },
};

describe("CardRepository", () => {
  it("renders without error", () => {
    render(<CardRepository data={data} />);

    expect(screen.getByText("Repo 01")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("About Repo 01")).toBeInTheDocument();
  });
});
