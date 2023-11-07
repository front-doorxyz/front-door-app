import { Entity, EntityItem } from 'electrodb';
import { DB_CLIENT as client } from '../client';

const table = process.env.DATABASE_TABLE_NAME;

export const JobApplication = new Entity(
  {
    model: {
      entity: 'JobApplication',
      version: '1',
      service: 'frontDoor',
    },
    attributes: {
      applicationId: {
        type: 'string',
        required: true,
      },
      referrerId: {
        type: 'string',
        required: true,
      },
      jobId: {
        type: 'string',
        required: true,
      },
      companyId: {
        type: 'string',
        required: true,
      },
      walletAddress: {
        type: 'string',
        required: true,
      },
      cvLink: {
        type: 'string',
        required: true,
      },
      location: {
        type: 'string',
        required: true,
      },
      noticePeriod: {
        type: 'string',
        required: true,
      },
      preferredSalary: {
        type: 'string',
        required: true,
      },
      description: {
        type: 'string',
        required: true,
      },
      date: {
        type: 'string',
        required: true,
      },
    },
    indexes: {
      jobApplication: {
        pk: {
          field: 'pk',
          composite: ['walletAddress', 'jobId'],
        },
        sk: {
          field: 'sk',
          composite: [],
        },
      },
      byJob: {
        index: 'gsi1pk-gsi1sk-index',
        pk: {
          field: 'gsi1pk',
          composite: ['jobId'],
        },
        sk: {
          field: 'gsi1sk',
          composite: ['applicationId'],
        },
      },
      byCompany: {
        index: 'gsi2pk-gsi2sk-index',
        pk: {
          field: 'gsi2pk',
          composite: ['companyId'],
        },
        sk: {
          field: 'gsi2sk',
          composite: ['applicationId'],
        },
      },
    },
  },
  { client, table }
);
export type JobApplicationItem = EntityItem<typeof JobApplication>;
