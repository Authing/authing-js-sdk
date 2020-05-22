mkdir -p  ./sdk-factory
npx get-graphql-schema https://core.authing.cn/graphql > ./sdk-factory/schema.graphql
node ./gql-generator.js --schemaFilePath ./sdk-factory/schema.graphql --destDirPath ./sdk-factory/graphql --depthLimit 2