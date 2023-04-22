import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { WidgetTopRepositories } from "../../components/WidgetTopRepositories";
import { GET_REPOSITORIES } from "../../hooks/useGetToRepositories";

const query = "2022-01-01..2022-12-31 sort:stars-desc";
const mockWithData = [
  {
    request: {
      query: GET_REPOSITORIES,
      variables: {
        query,
      },
    },
    result: {
      data: {
        search: {
          repositories: [
            {
              node: {
                description: "Skip to content arysandi/kumpulan kode di termux",
                id: "R_kgDOHoN05Q",
                name: "akun-termux",
                stargazers: {
                  totalCount: 21,
                },
              },
            },
          ],
        },
      },
    },
  },
];

describe("WidgetTopRepositories", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider mocks={mockWithData} addTypename={false}>
        <WidgetTopRepositories />
      </MockedProvider>
    );

    expect(await screen.findByText("Loading")).toBeInTheDocument();
    expect(await screen.findByText("Top Repositories")).toBeInTheDocument();
  });
});
