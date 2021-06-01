const superagent = require('superagent');
const ModelApi = require('../models/apiModel');
const HEROKU_LINK = process.env.HEROKU_LINK;
const readApi = async (req, res) => {
    superagent.get(`https://psychonauts-api.herokuapp.com/api/characters?limit=5`).then(data => {
        const dataApi = data.body.map(element => {
            return new ModelApi(element);

        });
        res.send(dataApi);
    }).catch(erorr => {
        console.log(erorr);
    })
}

module.exports = readApi;