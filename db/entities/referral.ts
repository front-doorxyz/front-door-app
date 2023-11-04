import { Entity, EntityItem } from 'electrodb';
import { DB_CLIENT as client } from '../client';

const table = process.env.DATABASE_TABLE_NAME;

export const Referral = new Entity(
  {
    model: {
      entity: 'Referral',
      version: '1',
      service: 'frontDoor',
    },
    attributes: {
      email: {
        type: 'string',
        required: true,
      },
      refId: {
        type: 'number',
        required: true,
      },
      jobId: {
        type: 'number',
        required: true,
      },
      refCode: {
        type: 'string',
        required: true,
      },
      status: {
        type: 'string',
        required: true,
      },
    },
    indexes: {
      referral: {
        pk: {
          field: 'pk',
          composite: ['email', 'jobId', 'refId'],
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

export type ReferralItem = EntityItem<typeof Referral>;
// export type CreateTaskItem = CreateEntityItem<typeof task>;
// export type TaskQueryResponse = QueryResponse<typeof task>;
