
const superagent = require("superagent");

export default function handler(req, res) {
    const number = Number(req.query.number);

  if (isNaN(number) || typeof number !== "number") {
    res.status(400).send("Invalid request!!");
  }
  superagent.get(`http://numbersapi.com/${number}`).then((response) => {
    res.status(200).send(response.text);
  });

}   
//In this example, we're going to return a random fact from an external API
//  (http://numbersapi.com/) about every number query we receive on the API endpoint. 
//  We'll use superagent as the HTTP client for making requests to the external API in 
// our API route.
// npm install superagent