import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  CorsHttpMethod,
  HttpApi,
  HttpMethod,
} from "aws-cdk-lib/aws-apigatewayv2";
import {
  HttpIamAuthorizer,
  HttpUserPoolAuthorizer,
} from "aws-cdk-lib/aws-apigatewayv2-authorizers";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { serverApi } from "./functions/server/resource";
import { auth } from "./auth/resource";

const backend = defineBackend({
  auth,
  serverApi,
});

// create a new API stack
const apiStack = backend.createStack("api-stack");

// create a IAM authorizer
const iamAuthorizer = new HttpIamAuthorizer();

// create a User Pool authorizer
const userPoolAuthorizer = new HttpUserPoolAuthorizer(
  "userPoolAuth",
  backend.auth.resources.userPool,
  {
    userPoolClients: [backend.auth.resources.userPoolClient],
  }
);

// create a new HTTP Lambda integration
const httpLambdaIntegration = new HttpLambdaIntegration(
  "LambdaIntegration",
  backend.serverApi.resources.lambda
);

// create a new HTTP API with IAM as default authorizer
const httpApi = new HttpApi(apiStack, "HttpApi", {
  apiName: "myHttpApi",
  corsPreflight: {
    // Modify the CORS settings below to match your specific requirements
    allowMethods: [CorsHttpMethod.GET, CorsHttpMethod.POST, CorsHttpMethod.PUT],
    // Restrict this to domains you trust
    allowOrigins: ["*"],
    // Specify only the headers you need to allow
    allowHeaders: ["*"],
  },
  createDefaultStage: true,
});

// add routes to the API with a IAM authorizer and different methods
httpApi.addRoutes({
  path: "/course",
  methods: [HttpMethod.GET, HttpMethod.POST],
  integration: httpLambdaIntegration,
  authorizer: iamAuthorizer,
});

// add a proxy resource path to the API
httpApi.addRoutes({
  path: "/course/{proxy+}",
  methods: [HttpMethod.PUT],
  integration: httpLambdaIntegration,
  authorizer: iamAuthorizer,
});

// add the options method to the route
httpApi.addRoutes({
  path: "/course/{proxy+}",
  methods: [HttpMethod.OPTIONS],
  integration: httpLambdaIntegration,
});

// add routes to the API with a IAM authorizer and different methods
httpApi.addRoutes({
  path: "/project",
  methods: [HttpMethod.GET, HttpMethod.POST],
  integration: httpLambdaIntegration,
  authorizer: iamAuthorizer,
});

// add a proxy resource path to the API
httpApi.addRoutes({
  path: "/project/{proxy+}",
  methods: [HttpMethod.PUT],
  integration: httpLambdaIntegration,
  authorizer: iamAuthorizer,
});

// add the options method to the route
httpApi.addRoutes({
  path: "/project/{proxy+}",
  methods: [HttpMethod.OPTIONS],
  integration: httpLambdaIntegration,
});

// add route to the API with a User Pool authorizer
httpApi.addRoutes({
  path: "/cognito-auth-path",
  methods: [HttpMethod.GET],
  integration: httpLambdaIntegration,
  authorizer: userPoolAuthorizer,
});

// create a new IAM policy to allow Invoke access to the API
const apiPolicy = new Policy(apiStack, "ApiPolicy", {
  statements: [
    new PolicyStatement({
      actions: ["execute-api:Invoke"],
      resources: [
        `${httpApi.arnForExecuteApi("*", "/items")}`,
        `${httpApi.arnForExecuteApi("*", "/items/*")}`,
        `${httpApi.arnForExecuteApi("*", "/project")}`,
        `${httpApi.arnForExecuteApi("*", "/project/*")}`,
        `${httpApi.arnForExecuteApi("*", "/cognito-auth-path")}`,
      ],
    }),
  ],
});

// attach the policy to the authenticated and unauthenticated IAM roles
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(apiPolicy);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(apiPolicy);

// add outputs to the configuration file
backend.addOutput({
  custom: {
    API: {
      [httpApi.httpApiName!]: {
        endpoint: httpApi.url,
        region: Stack.of(httpApi).region,
        apiName: httpApi.httpApiName,
      },
    },
  },
});
