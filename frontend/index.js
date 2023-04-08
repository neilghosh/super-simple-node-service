const express = require('express')
const axios = require('axios')
const app = express()
const port = 8080

async function getData(name) {
    try {
        const backendUrl = process.env.BACKEND_SVC_URL;
        console.log('Fetching data from backend : ', backendUrl)
        const response = await axios.get(backendUrl+'?name='+name);
        console.log('Got data from backend: ', response);
        return response.data;
    } catch (error) {
        console.error('Error getting data from backend: ', error);
        return "No Data!";
    }
}

app.get('/', (req, res) => {
    console.log('Request Received : ', req.query.name)
    let backendData;
    (async () => {
        backendData = await getData(req.query.name);
        res.write('<h1>');
        res.write(backendData);
        res.write('</h1>');
        res.end();
    })();

})

app.listen(port, () => {
    console.log(`Front End app listening on port ${port}`)
})