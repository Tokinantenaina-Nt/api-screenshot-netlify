const express = require('express');
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('#### WELCOME ###');
});

router.get('/screenshots', async (req, res) => {
    try {
        const accessKey = '4f286cb96a13e465f2419e607d5d8d76';
        const urlToCapture = 'https://www.flashscore.mobi/?s=2';
        const screenshotAPI = 'https://api.screenshotlayer.com/api/capture';

        const response = await axios.get(screenshotAPI, {
            params: {
                access_key: accessKey,
                url: urlToCapture,
                fullpage: '1',
                width: '1024',
                format: 'PNG',
            },
            responseType: 'arraybuffer',
        });

        // Sauvegarder l'image dans le système de fichiers
        /*  const screenshotsDirectory = path.join(__dirname, 'screenshots');
          const filename = `screenshot_${Date.now()}.png`;
          const filePath = path.join(screenshotsDirectory, filename);
          await fs.writeFile(filePath, response.data);
  */
        // Envoyer la réponse
        res.set('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur lors de la capture de l\'écran');
    }
});

module.exports = router;
