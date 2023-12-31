import { CreateEntityItem, Entity, EntityItem, QueryResponse } from 'electrodb';
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
      refererAddress: {
        type: 'string',
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
          composite: ['refererAddress'],
        },
        sk: {
          field: 'sk',
          composite: ['jobId', 'refId'],
        },
      },
    },
  },
  { client, table }
);

export type ReferralItem = EntityItem<typeof Referral>;
export type CreateReferralItem = CreateEntityItem<typeof Referral>;
export type ReferralQueryResponse = QueryResponse<typeof Referral>;
