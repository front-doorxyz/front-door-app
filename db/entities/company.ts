import { CreateEntityItem, Entity, EntityItem, QueryResponse } from 'electrodb';
import { DB_CLIENT as client } from '../client';

const table = process.env.DATABASE_TABLE_NAME;

export const Company = new Entity(
  {
    model: {
      entity: 'Company',
      version: '1',
      service: 'frontDoor',
    },
    attributes: {
      companyId: {
        type: 'string',
        required: true,
      },
      name: {
        type: 'string',
        required: true,
      },
      site: {
        type: 'string',
        required: true,
      },
      email: {
        type: 'string',
        required: true,
      },
    },
    indexes: {
      company: {
        pk: {
          field: 'pk',
          composite: ['companyId'],
        },
        sk: {
          field: 'sk',
          composite: ['companyId'],
        },
      },
    },
  },
  { client, table }
);

export type CompanyItem = EntityItem<typeof Company>;
export type CreateCompanyItem = CreateEntityItem<typeof Company>;
export type CompanyQueryResponse = QueryResponse<typeof Company>;
