import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import * as schema from './schemas/jobs';

// create the connection
const connection = connect({
  host: process.env.NEXT_PUBLIC_DATABASE_HOST,
  username: process.env.NEXT_PUBLIC_DATABASE_USERNAME,
  password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD,
});

export const db = drizzle(connection, { schema });
