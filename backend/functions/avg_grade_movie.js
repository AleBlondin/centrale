const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }

    const dynamoDb = new DynamoDB.DocumentClient();
    var uuid = event.pathParameters.id;
    var somme_note = 0;
    var compteur = 0;
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
    uuid = uuid.replace(/%20/g ," ");
    const res1 = result.Items;
    const N = res1.length;
    for(let i = 0; i < N ; i++){
        if(res1[i]["score"][uuid] !== undefined){
            compteur = compteur + 1 ;
            somme_note = somme_note + parseFloat(res1[i]["score"][uuid]);
        }
    }
    
    if (compteur !== 0){
        const avg = somme_note/compteur;
        const texte = avg.toString()+"/5"
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(texte),
        }
    }
    else{
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify("Aucune Note"),
        }
    }
}