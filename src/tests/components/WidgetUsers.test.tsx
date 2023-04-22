import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { WidgetTopRepositories } from "../../components/WidgetTopRepositories";
import { GET_USERS } from "../../hooks/useGetUsers";

const query = "type:user created:2023-03-01..2023-03-31 sort:repositories-desc";
const mockWithData = [
  {
    request: {
      query: GET_USERS,
      variables: {
        query,
      },
    },
    result: {
      data: {
        search: {
          users: [
            {
              node: {
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/127632930?v=4",
                id: "R_kgDOHoN05Q",
                name: "akun-termux",
                email: "ak@test.com",
                login: "akun1236",
                followers: {
                  totalCount: 21,
                },
                repositories: {
                  edges: [
                    {
                      node: {
                        description: "test",
                        name: "histo",
                        stargazers: {
                          totalCount: 1,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
  },
];

describe("WidgetUsers", () => {
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
