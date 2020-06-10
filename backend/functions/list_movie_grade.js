const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }

    const dynamoDb = new DynamoDB.DocumentClient();
    const uuid = event.pathParameters.id;
    const result = await dynamoDb.query({
        TableName: process.env.tableName,
        KeyConditionExpression: '#type = :type',
        ExpressionAttributeNames: {
            '#type': 'type'
        },
        ExpressionAttributeValues: {
            ':type': 'user',
        },
    }).promise();
    const res1 = result.Items;
    N = res1.length;
    var n = 0;
    for(let i=0; i <N ; i++){
        if(res1[i]["uuid"] == uuid){
            n = i;
        }
    }    
    const info_user = res1[n];
    const keys = Object.keys(info_user["score"]);
    
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(keys),
    }

}