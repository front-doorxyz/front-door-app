FROM amazon/aws-cli:2.0.39

ADD ./infrastructure/fd-database/table-schema.json /data/table-schema.json

WORKDIR /data

ENTRYPOINT [ "aws", "dynamodb", "create-table", "--cli-input-json", "file://table-schema.json", "--endpoint-url", "http://ddb:8000"]