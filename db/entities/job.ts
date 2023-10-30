import { CreateEntityItem, Entity, EntityItem, QueryResponse } from 'electrodb';
import { DB_CLIENT as client } from '../client';

const table = process.env.DATABASE_TABLE_NAME;

export const Job = new Entity(
  {
    model: {
      entity: 'Job',
      version: '1',
      service: 'frontDoor',
    },
    attributes: {
      jobId: {
        type: 'string',
        required: true,
      },
      companyId: {
        type: 'string',
        required: true,
      },
      companyName: {
        type: 'string',
        required: true,
      },
      roleTitle: {
        type: 'string',
        required: true,
      },
      description: {
        type: 'string',
        required: true,
      },
      location: {
        type: 'string',
        required: true,
      },
      skills: {
        type: 'string',
        required: true,
      },
      experience: {
        type: 'string',
        required: true,
      },
      salary: {
        type: 'number',
        required: true,
      },
      bounty: {
        type: 'string',
        required: true,
      },
      langaugeSpoken: {
        type: 'string',
        required: true,
      },
      date: {
        type: 'string',
        required: true,
      },
      shard: {
        type: 'number',
        required: true,
      },
      type: {
        type: 'string',
        required: true,
      },
      status: {
        type: 'string',
        required: true,
      },
    },
    indexes: {
      job: {
        pk: {
          field: 'pk',
          composite: ['jobId'],
        },
        sk: {
          field: 'sk',
          composite: [],
        },
      },
      company: {
        index: 'gsi2pk-gsi2sk-index',
        pk: {
          field: 'gsi2pk',
          composite: ['companyId'],
        },
        sk: {
          field: 'gsi2sk',
          composite: ['jobId', 'date'],
        },
      },
      all: {
        index: 'gsi1pk-gsi1sk-index',
        pk: {
          field: 'gsi1pk',
          composite: ['shard', 'type'],
        },
        sk: {
          field: 'gsi1sk',
          composite: ['date', 'status'],
        },
      },
    },
  },
  { client, table }
);
export type JobItem = EntityItem<typeof Job>;
export type CreateJobItem = CreateEntityItem<typeof Job>;
export type JobQueryResponse = QueryResponse<typeof Job>;
