exports.hello = async (event) => {
  console.log("HELLO")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!'
    })
  };
};

exports.hello2 = async (event) => {
  console.log("HELLO2")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully! Function 2'
    })
  };
};
