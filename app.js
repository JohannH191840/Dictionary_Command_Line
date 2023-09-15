//Require https module

const https = require("https");

function getDef(term) {
    try{
        //request data
        const request = https.get(
            `https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=d1bfa067-aab3-4cf7-acc3-7d79a860cdf8`,
            (response) => {
                let body = "";
                //Read data

                response.on("data", (data) => {
                    body += data.toString();
                });

                response.on("end", () => {
                    //Parse the data
                    const definition = JSON.parse(body);
                    //print the data
                    console.log(definition[0].shortdef);
                });
            }
        );

                request.on("error", (error) => console.error(error.message));
            } catch (error) {
                console.error(error.message);
            }
        }

        const query = process.argv.slice(2);
        query.forEach(getDef);
        
    
    