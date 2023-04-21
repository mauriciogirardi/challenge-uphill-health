import { gql, useQuery } from "@apollo/client";
import { RepositoryTypes } from "../@types/RepositoryTypes";
import { getIntervalLastYear } from "../utils/getIntervalLastYear";

interface NodeData {
  node: RepositoryTypes;
}

interface RepositoriesData {
  search: {
    edges: NodeData[];
  };
}

interface UseGetTopRepositoriesProps {
  searchValue?: string;
}

const GET_REPOSITORIES = gql`
  query getUsers($query: String!) {
    search(query: $query, type: REPOSITORY, first: 4) {
      edges {
        node {
          ... on Repository {
            name
            id
            stargazers {
              totalCount
            }
            description
          }
        }
      }
    }
  }
`;

export const useGetTopRepositories = ({
  searchValue = "",
}: UseGetTopRepositoriesProps) => {
  const { endYearStartDate, lastYearStartDate } = getIntervalLastYear();
  const query = `${searchValue} ${lastYearStartDate}..${endYearStartDate} sort:stars-desc`;

  const { data, loading, error } = useQuery<RepositoriesData>(
    GET_REPOSITORIES,
    {
      variables: { query: query },
    }
  );

  return {
    repositories: data?.search.edges,
    loading,
    error,
  };
};
