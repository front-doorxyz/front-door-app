import { Entity, EntityItem } from 'electrodb';
import { DB_CLIENT as client } from '../client';

const table = process.env.DATABASE_TABLE_NAME;

export const Referee = new Entity(
  {
    model: {
      entity: 'Referee',
      version: '1',
      service: 'frontDoor',
    },
    attributes: {
      email: {
        type: 'string',
        required: true,
      },
      refId: {
        type: 'string',
        required: true,
      },
      jobId: {
        type: 'string',
        required: true,
      },
      status: {
        type: 'string',
        required: true,
      },
    },
    indexes: {
      candidate: {
        pk: {
          field: 'pk',
          composite: ['email'],
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

export type RefereeItem = EntityItem<typeof Referee>;
// export type CreateTaskItem = CreateEntityItem<typeof task>;
// export type TaskQueryResponse = QueryResponse<typeof task>;
