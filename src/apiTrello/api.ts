import fetch from 'node-fetch';
require('dotenv').config();


const ID_LIST = process.env.ID_LIST;
const KEY = process.env.KEY;
const TOKEN = process.env.TOKEN;

const trelloApi = async () => {
    const response = await fetch(`https://api.trello.com/1/lists/${ID_LIST}?key=${KEY}&token=${TOKEN}`);
    const dados = await response.json();
    return dados;
}

export default trelloApi;