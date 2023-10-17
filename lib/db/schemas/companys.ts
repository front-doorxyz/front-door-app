import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const companies = mysqlTable('companies', {
  id: int('id').primaryKey(),
  address: varchar('address', { length: 256 }),
  name: varchar('name', { length: 256 }),
  description: varchar('description', { length: 256 }),
  website: varchar('website', { length: 256 }),
});

export type Company = typeof companies.$inferSelect;
