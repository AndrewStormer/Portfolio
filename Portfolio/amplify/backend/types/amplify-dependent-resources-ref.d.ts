export type AmplifyDependentResourcesAttributes = {
  "api": {
    "courseApi": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "projectApi": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "skillsApi": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "function": {
    "nestBackendFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}