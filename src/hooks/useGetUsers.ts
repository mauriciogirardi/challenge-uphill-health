import { gql, useQuery } from "@apollo/client";
import { getIntervalLastMonth } from "../utils/getIntervalLastMoth";
import { UserTypes } from "../@types/UserTypes";
import { SortTypes } from "../@types/SortTypes";

interface NodeData {
  node: UserTypes;
}

interface UsersData {
  search: {
    edges: NodeData[];
  };
}

interface UserGetUsersProps {
  sort: SortTypes;
  searchValue?: string;
}

export const GET_USERS = gql`
  query getUsers($query: String!) {
    search(query: $query, type: USER, first: 3) {
      edges {
        node {
          ... on User {
            id
            name
            email
            avatarUrl
            login
            followers {
              totalCount
            }

            repositories(
              first: 1
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  name
                  stargazers {
                    totalCount
                  }
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const useGetUsers = ({ sort, searchValue = "" }: UserGetUsersProps) => {
  const { endMonthStartDate, lastMonthStartDate } = getIntervalLastMonth();
  const query = `${searchValue} type:user created:${lastMonthStartDate}..${endMonthStartDate} sort:${sort}`;

  const { data, loading, error } = useQuery<UsersData>(GET_USERS, {
    variables: { query },
  });

  return {
    users: data?.search?.edges,
    loading,
    error,
  };
};
