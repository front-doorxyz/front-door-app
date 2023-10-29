import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const DATABASE_ENDPOINT = process.env.DATABASE_ENDPOINT;
const DATABASE_REGION = process.env.DATABASE_REGION;
const DATABASE_ACCESS_KEY = process.env.DATABASE_ACCESS_KEY;
const DATABASE_SECRET_KEY = process.env.DATABASE_SECRET_KEY;

export const DB_CLIENT = new DynamoDBClient({
  endpoint: DATABASE_ENDPOINT ? DATABASE_ENDPOINT : undefined,
  region: DATABASE_REGION ? DATABASE_REGION : undefined,
  credentials: {
    accessKeyId: DATABASE_ACCESS_KEY!,
    secretAccessKey: DATABASE_SECRET_KEY!,
  },
});
