import { mergePartially } from 'merge-partially';

interface Feature {
  platformProductCode: string;
  featureCode: string;
  featureName: string;
}

export interface ProfileResponse {
  subscription: {
    features: Feature[];
  };
}

export const makeFakeSubscriptionObject = (
  override?: Partial<ProfileResponse>
): ProfileResponse => {
  return mergePartially.deep<ProfileResponse>(
    {
      subscription: {
        features: [],
      },
    },
    override
  );
};
