"use strict";

module.exports.hello = async (event) => {
  // console.log("hola soy unafuncion de prueba");
  const body = JSON.parse(event.body);
  // const idParam = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "TEST",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
