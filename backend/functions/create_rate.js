const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    const data = JSON.parse(event.body);
    console.log(data);
    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const dynamoDb = new DynamoDB.DocumentClient();

    var uuid = data.user;
    uuid = uuid.replace(/%20/g ," ");

    const result = await dynamoDb.get({
        TableName: process.env.tableName,
        Key: {
            type: 'user',
            uuid: uuid,
        },
    }).promise();

    var info_user = result.Items;
    
    var rate = info_user["score"];

    var movie = data.title;
    movie = movie.replace(/%20/g ," ");

    var movie_rate = data.score;

    rate[movie] = movie_rate ; 

    const item = {
        type: 'user',
        uuid: uuid,
        score : rate,
    }

    await dynamoDb.put({
        TableName: process.env.tableName,
        Item: item,
    }).promise();

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        body: JSON.stringify(item),
    }
}

