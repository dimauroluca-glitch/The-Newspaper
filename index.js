const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Il mio server Node.js creato senza installare nulla!');
});

app.listen(PORT, () => {
    console.log(`Server attivo sulla porta ${PORT}`);
});
