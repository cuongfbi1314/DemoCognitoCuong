import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-west-2_12BBCqOUc',
  ClientId: '60jidnoi750gg6l6nr7niubv1m'
};

export default new CognitoUserPool(poolData);