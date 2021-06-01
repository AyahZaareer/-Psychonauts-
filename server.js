const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const readApi = require('./contllorlers/apiData');
const curdData = require('./contllorlers/curdData');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3030;

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send('everything is working!')
});
//get data from API
app.get('/characters', readApi);
//-------------------------------------------------------
app.post('/favorite', curdData.addFav);
app.get('/favorite', curdData.getFav);
app.delete('/favorite/:slug', curdData.deleteFav);
app.put('/favorite/:slug', curdData.updateFav);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
