import { gql, useQuery } from "@apollo/client";
import { UserDetailTypes } from "../@types/UserDetailTypes";

interface UserData {
  user: UserDetailTypes;
}

interface UseGetUserProps {
  login: string;
}

export const useGetUser = ({ login }: UseGetUserProps) => {
  const GET_USER = gql`
    query getUser($login: String!) {
      user(login: $login) {
        name
        login
        repositories(
          first: 3
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          nodes {
            name
            description
            stargazerCount
            id
            url
          }
        }
        email
        followers {
          totalCount
        }
        following {
          totalCount
        }
        avatarUrl
        bio
      }
    }
  `;

  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login },
  });

  return {
    user: data?.user,
    loading,
    error,
  };
};
