require('dotenv').config();
const Mastodon = require('mastodon-api');


console.log("Mastobot starting...");

const M = new Mastodon({
    client_key: process.env.CLIENT_KEY,
    client_secret: process.env.CLIENT_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    timeout_ms: 60*1000,
    api_url:'https://botsin.space/api/v1/',

})

setInterval(toot_num, 5000); // THIS IS EVERY FIVE SECONDS DON'T LET GO OUT LIKE THIS

// setInterval(toot_num, 24 * 60 * 60 * 1000); for once a day


// function below is enough to post using random number generator

function toot_num() {
const num = Math.floor(Math.random() * 100);

const params = {
    status: `There are currently ${num} moderately disinterested souls circling around the core.`

};

M.post('statuses', params, (error, data) => {
    if (error) {
        console.error(error);
    }

    else {
        console.log(`ID: ${data.id} and timestamp: ${data.created_at}`);
        console.log(data.content);
    }
    
});
}
