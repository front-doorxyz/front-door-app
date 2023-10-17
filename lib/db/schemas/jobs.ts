import { relations } from 'drizzle-orm';
import {
  int,
  mysqlTable,
  primaryKey,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const jobs = mysqlTable('jobs', {
  id: serial('id').primaryKey().notNull(),
  companyName: varchar('company_name', { length: 256 }),
  description: varchar('description', { length: 256 }),
  location: varchar('location', { length: 256 }),
  roleTitle: varchar('role_title', { length: 256 }),
  bounty: int('bounty'),
  maxSalary: int('maxSalary'),
  minSalary: int('minSalary'),
  type: varchar('type', { length: 256 }),
  experience: varchar('experience', { length: 256 }),
  langaugeSpoken: varchar('langauge_spoken', { length: 256 }),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export const skills = mysqlTable('skills', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 256 }),
});

export const jobOnSkills = mysqlTable(
  'job_skills',
  {
    jobId: int('job_id')
      .notNull()
      .references(() => jobs.id),
    skillId: int('skill_id')
      .notNull()
      .references(() => skills.id),
  },
  (table) => {
    return {
      pk: primaryKey(table.skillId, table.jobId),
    };
  }
);

export const jobsRelations = relations(jobs, ({ one, many }) => ({
  postSkills: many(jobOnSkills),
}));


export const skillRelations = relations(skills, ({ many }) => ({
  posts: many(jobOnSkills),
}));



export const jobOnSkillsRelations = relations(jobOnSkills, ({ one }) => ({
  job: one(jobs, {
    fields: [jobOnSkills.jobId],
    references: [jobs.id],
  }),

  skill: one(skills, {
    fields: [jobOnSkills.skillId],
    references: [skills.id],
  }),
}));

export type Job = typeof jobs.$inferSelect;
