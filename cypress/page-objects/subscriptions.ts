import { makeFakeSubscriptionObject } from '../factories/subscription';
import { mockPlatformIntegrationProfileGetRoute } from '../mocked-api-routes/subscription';

export const setSubscriptions = () => {
  // If your microfrontend is licensable, you will need to mock the profile endpoint, passing
  // appropriate feature information so you can access your microfrontned
  const subscriptionObject = makeFakeSubscriptionObject({
    subscription: {
      features: [
        {
          platformProductCode: 'acct-mgmt',
          featureCode: '321',
          featureName: 'Payroll Address and Cleansing',
        },
      ],
    },
  });
  mockPlatformIntegrationProfileGetRoute(subscriptionObject);
};
