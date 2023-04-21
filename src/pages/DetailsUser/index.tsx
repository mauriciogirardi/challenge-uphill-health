import { useLocation } from "react-router-dom";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import { GithubLogo } from "phosphor-react";
import { useGetUser } from "../../hooks/useGetUser";
import { StarAmount } from "../../components/StarAmount";
import { PageErrors } from "../PageErrors";
import { Loading } from "../../components/Loading";
import {
  CardDetails,
  CardDetailsHeader,
  CardDetailsHeaderWrapper,
  ContainerLoading,
  InfoFollower,
  LinkGithub,
  RepositoryContainer,
  RepositoryDescription,
  Wrapper,
} from "./styles";

export function DetailsUser() {
  const { state } = useLocation();
  const { user, loading, error } = useGetUser({ login: state.login });
  const name = user?.name || user?.login;

  if (error) return <PageErrors error={error} />;

  return (
    <DefaultLayout hiddenSearchAndShowBack title="/ Details">
      {loading ? (
        <ContainerLoading>
          <Loading size={34} />
        </ContainerLoading>
      ) : (
        <CardDetails>
          <Wrapper>
            <CardDetailsHeader>
              <img src={user?.avatarUrl} alt={name} />
              <CardDetailsHeaderWrapper>
                <h1>{name}</h1>
                <span>{user?.bio}</span>
                <p>{user?.email}</p>
                <InfoFollower>
                  <div>
                    <span>
                      {`follower${user?.followers.totalCount! > 0 ? "s" : ""}`}:{" "}
                      {user?.followers.totalCount}
                    </span>
                  </div>
                  <div>
                    <span>following: {user?.following.totalCount}</span>
                  </div>
                  <LinkGithub
                    href={`https://github.com/${user?.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`go to ${user?.name}'s github`}
                  >
                    <GithubLogo size={28} />
                  </LinkGithub>
                </InfoFollower>
              </CardDetailsHeaderWrapper>
            </CardDetailsHeader>

            <RepositoryContainer>
              {user?.repositories.nodes.map((repo) => (
                <RepositoryDescription
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3>{repo.name}</h3>
                    <StarAmount values={repo.stargazerCount} />
                  </div>
                  <p>{repo.description}</p>
                </RepositoryDescription>
              ))}
            </RepositoryContainer>
          </Wrapper>
        </CardDetails>
      )}
    </DefaultLayout>
  );
}
