get-graphql-schema http://localhost:5510/graphql > ./src/graphql/schema.graphql
gqlg --schemaFilePath ./src/graphql/schema.graphql --destDirPath ./src/graphql --depthLimit 1