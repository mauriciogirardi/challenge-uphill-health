import { ContainerLoading, Content, FlexCard } from "./styles";
import { useGetTopRepositories } from "../../hooks/useGetToRepositories";
import { NotFoundContent } from "../NotFoundContent";
import { CardRepository } from "../CardRepository";
import { PageErrors } from "../../pages/PageErrors";
import { useSearch } from "../../hooks/useSearch";
import { Loading } from "../Loading";

export function WidgetTopRepositories() {
  const { value } = useSearch();
  const { repositories, loading, error } = useGetTopRepositories({
    searchValue: value || "",
  });
  const hasRepositories = repositories && repositories?.length <= 0;

  return (
    <Content>
      <h1>Top Repositories</h1>
      {error ? (
        <PageErrors error={error} showHeader={false} />
      ) : (
        <FlexCard>
          {loading && (
            <ContainerLoading>
              <Loading size={36} title="Loading" />
            </ContainerLoading>
          )}

          {repositories?.map(({ node }) => (
            <CardRepository data={node} key={node.id} />
          ))}

          {hasRepositories && (
            <NotFoundContent message="Could not find top repositories!" />
          )}
        </FlexCard>
      )}
    </Content>
  );
}
