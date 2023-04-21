import { ContainerCard, DescriptionCard } from "./styles";
import { RepositoryTypes } from "../../@types/RepositoryTypes";
import { StarAmount } from "../StarAmount";

interface CardRepositoryProps {
  data: RepositoryTypes;
}

export function CardRepository({ data }: CardRepositoryProps) {
  return (
    <ContainerCard>
      <DescriptionCard>
        <h3>{data.name}</h3>
        <StarAmount values={data.stargazers.totalCount} />
        <p>{data.description}</p>
      </DescriptionCard>
    </ContainerCard>
  );
}
