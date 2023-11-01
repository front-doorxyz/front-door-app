import { CreateEntityItem, Entity, EntityItem, QueryResponse } from 'electrodb';
import { DB_CLIENT as client } from '../client';

const table = process.env.DATABASE_TABLE_NAME;

export const Referrer = new Entity(
  {
    model: {
      entity: 'Referrer',
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
    },
    indexes: {
      referrer: {
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

export type ReferrerItem = EntityItem<typeof Referrer>;
export type CreateReferrerItem = CreateEntityItem<typeof Referrer>;
export type ReferrerQueryResponse = QueryResponse<typeof Referrer>;
