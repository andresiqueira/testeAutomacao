import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(
    `Server startes on port ${PORT}`
));