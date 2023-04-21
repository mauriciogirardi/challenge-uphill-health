export type UserTypes = {
  avatarUrl: string;
  email: string;
  followers: {
    totalCount: number;
  };
  id: string;
  login: string;
  name: string;
  repositories: {
    edges: Repository[];
  };
};

type Repository = {
  node: {
    name: string;
    description: string;
    stargazers: {
      totalCount: number;
    };
  };
};
