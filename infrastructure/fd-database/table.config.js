const schema = require('./table-schema.json');

module.exports = async ({ options, resolveVariable }) => {
  const stage = await resolveVariable('sls:stage');
  const tableName = await resolveVariable('self:custom.tableName');
  schema.TableName = tableName;
  return schema;
};
