const express = require('express');
const axios = require('axios');
const router = express.Router();
router.get('/screenshot', async (req, res) => {
    try {
        const accessKey = '4f286cb96a13e465f2419e607d5d8d76';
        const urlToCapture = 'https://www.google.com'; // Remplacez ceci par l'URL que vous souhaitez capturer
        const screenshotAPI = 'https://api.screenshotlayer.com/api/capture';

        const response = await axios.get(screenshotAPI, {
            params: {
                access_key: accessKey,
                url: urlToCapture,
                fullpage: '1',
                width: '1024',
                format: 'PNG',
            },
            responseType: 'arraybuffer', // Spécifier le type de réponse pour gérer les images
        });

        // Renvoyer l'image capturée
        res.set('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur
        console.error(error.message);
        res.status(500).send('Erreur lors de la capture de l\'écran');
    }
});
module.exports = router
