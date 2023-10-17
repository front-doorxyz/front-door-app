// import { relations } from 'drizzle-orm';
// import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
// import { jobOnSkills } from './job_skill';

// export const skills = mysqlTable('skills', {
//   id: int('id').primaryKey().notNull(),
//   name: varchar('name', { length: 256 }),
// });

// export const skillRelations = relations(skills, ({ many }) => ({
//   posts: many(jobOnSkills),
// }));
// export type Skill = typeof skills.$inferSelect;
