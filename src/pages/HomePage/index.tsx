import { WidgetTopRepositories } from "../../components/WidgetTopRepositories";
import { WidgetUsers } from "../../components/WidgetUsers";
import { DefaultLayout } from "../../layouts/DefaultLayout";

export function HomePage() {
  return (
    <DefaultLayout>
      <WidgetUsers sort="followers-desc" title="Trending Users" />
      <WidgetUsers sort="repositories-desc" title="Top Repositories" />
      <WidgetTopRepositories />
    </DefaultLayout>
  );
}
