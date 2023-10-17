// import { int, mysqlTable, primaryKey, varchar } from 'drizzle-orm/mysql-core';
// import { jobs } from './jobs';
// import { skills } from './skills';

// export const jobOnSkills = mysqlTable(
//   'job_skills',
//   {
//     jobId: int('job_id')
//       .notNull()
//       .references(() => jobs.id),
//     skillId: int('skill_id')
//       .notNull()
//       .references(() => skills.id),
//   },
//   (table) => {
//     return {
//       pk: primaryKey(table.skillId, table.jobId),
//     };
//   }
// );
