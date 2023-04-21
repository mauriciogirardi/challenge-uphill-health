export type UserDetailTypes = {
  avatarUrl: string;
  bio: string;
  email: string;
  login: string;
  name: string;
  followers: { totalCount: number };
  following: { totalCount: number };
  repositories: {
    nodes: Repository[];
  };
};

type Repository = {
  description: string;
  id: string;
  name: string;
  stargazerCount: number;
  url: string;
};
