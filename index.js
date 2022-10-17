const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Test api')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server startes on port ${PORT}`
))