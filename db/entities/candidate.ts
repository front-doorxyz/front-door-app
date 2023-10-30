import { Entity, EntityItem } from 'electrodb';
import { DB_CLIENT as client } from '../client';

const table = process.env.DATABASE_TABLE_NAME;

export const Candidate = new Entity(
  {
    model: {
      entity: 'Candidate',
      version: '1',
      service: 'frontDoor',
    },
    attributes: {
      walletAddress: {
        type: 'string',
        required: true,
      },
      name: {
        type: 'string',
        required: true,
      },
      email: {
        type: 'string',
        required: true,
      },
      site: {
        type: 'string',
      },
    },
    indexes: {
      candidate: {
        pk: {
          field: 'pk',
          composite: ['walletAddress'],
        },
        sk: {
          field: 'sk',
          composite: [],
        },
      },
    },
  },
  { client, table }
);

export type CandidateItem = EntityItem<typeof Candidate>;
// export type CreateTaskItem = CreateEntityItem<typeof task>;
// export type TaskQueryResponse = QueryResponse<typeof task>;
