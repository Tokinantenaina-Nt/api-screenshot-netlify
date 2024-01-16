const axios = require('axios');
const express = require('express')
const app = express()


const apiKey = '4f286cb96a13e465f2419e607d5d8d76';  // Remplacez par votre clé d'API
const screenshotUrl = 'https://api.browserless.io/v1/screenshot';

app.get('/screenshot', async (req, res) => {
    try {
        // Utilisation d'Axios pour appeler l'API de Browserless.io
        const response = await axios.post(screenshotUrl, {
            url: 'https://www.google.com',  // Remplacez par l'URL de la page que vous souhaitez capturer
            token: apiKey,
        });

        // Envoi de l'image en réponse
        res.contentType('image/png');
        res.end(response.data, 'binary');
    } catch (error) {
        console.error('Erreur lors de la capture d\'écran :', error);
        res.status(500).send('Erreur lors de la capture d\'écran');
    }
});

app.listen(8200, () => {
    console.log('port 8200')
})