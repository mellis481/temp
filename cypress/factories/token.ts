import { mergePartially } from 'merge-partially';

export interface Token {
  access_token: string;
  expires_at: number;
  scope: string;
  token_type: string;
  profile?: {
    name?: string;
  };
}

export const makeFakeToken = (override?: Partial<Token>): Token => {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 20 * 60000);
  return mergePartially.shallow<Token>(
    {
      access_token: 'mock_token',
      expires_at: Math.floor(expiresAt.getTime() / 1000),
      scope: 'profile',
      token_type: 'bearer',
      profile: {
        name: undefined,
      },
    },
    override
  );
};
