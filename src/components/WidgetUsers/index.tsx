import { ContainerLoading, Content, FlexCard } from "./styles";
import { NotFoundContent } from "../NotFoundContent";
import { useGetUsers } from "../../hooks/useGetUsers";
import { PageErrors } from "../../pages/PageErrors";
import { SortTypes } from "../../@types/SortTypes";
import { CardUser } from "../CardUser";
import { Loading } from "../Loading";
import { useSearch } from "../../hooks/useSearch";

interface WidgetUsersProps {
  sort: SortTypes;
  title?: string;
}

export function WidgetUsers({ sort, title }: WidgetUsersProps) {
  const { value } = useSearch();

  const { users, loading, error } = useGetUsers({
    sort,
    searchValue: value || "",
  });

  return (
    <Content>
      {title && <h1>{title}</h1>}
      {error ? (
        <PageErrors error={error} showHeader={false} />
      ) : (
        <FlexCard>
          {loading && (
            <ContainerLoading>
              <Loading size={36} title="Loading" />
            </ContainerLoading>
          )}

          {users?.map(({ node }) => (
            <CardUser key={node.id} data={node} />
          ))}

          {users && users?.length <= 0 && (
            <NotFoundContent message={`Could not find ${title}!`} />
          )}
        </FlexCard>
      )}
    </Content>
  );
}
