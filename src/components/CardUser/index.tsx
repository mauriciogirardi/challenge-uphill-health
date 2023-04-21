import { User } from "phosphor-react";

import { StarAmount } from "../StarAmount";
import { UserTypes } from "../../@types/UserTypes";
import {
  Line,
  Thumbnail,
  HeaderCard,
  FooterCard,
  LinkProfile,
  ImageProfile,
  WrapperFooter,
  ContainerCard,
  DescriptionCard,
  WrapperDescription,
} from "./styles";

interface CardUserProps {
  data: UserTypes;
}

export function CardUser({ data }: CardUserProps) {
  const repoUser = data?.repositories?.edges[0]?.node;
  const name = data.name || data.login;

  if (!data) return null;

  return (
    <ContainerCard>
      <Thumbnail>
        {data.avatarUrl && <img src={data.avatarUrl} alt="" />}

        <LinkProfile to={`/user/profile`} state={{ login: data.login }}>
          Open Profile
        </LinkProfile>
      </Thumbnail>

      <HeaderCard>
        {data.avatarUrl && (
          <ImageProfile
            src={data.avatarUrl}
            alt={`Github profile image of ${name}`}
          />
        )}
      </HeaderCard>

      <DescriptionCard>
        <strong>{name}</strong>
        <span>{data.email}</span>
        <WrapperDescription>
          <User size={16} weight="bold" />
          <p>{data.followers.totalCount}</p>
          <span>{`Follower${data.followers.totalCount > 0 ? "s" : ""}`}</span>
        </WrapperDescription>
      </DescriptionCard>
      <Line />
      <FooterCard>
        {repoUser && (
          <WrapperFooter>
            <p>{repoUser?.name}</p>
            <StarAmount values={repoUser?.stargazers.totalCount} />
          </WrapperFooter>
        )}

        <span>
          {repoUser ? repoUser?.description : "User without repository"}
        </span>
      </FooterCard>
    </ContainerCard>
  );
}
