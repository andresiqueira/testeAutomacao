import fetch from 'node-fetch';

const trelloApi = async () => {
    const response = await fetch('https://api.trello.com/1/cards/?key=5032955848a8a601c3140529435ee9c9&token=55c29e64f866451d79a93781877b5c886f398bfd50915c38dbd314aa4c64c2ac');
    const dados = await response.json();
    console.log(dados);
}

export default trelloApi;