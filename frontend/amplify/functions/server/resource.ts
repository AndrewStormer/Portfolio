import { defineFunction } from "@aws-amplify/backend";

export const myApiFunction = defineFunction({
  name: "api-server",
  entry: "./backend/src/index.ts",
});
