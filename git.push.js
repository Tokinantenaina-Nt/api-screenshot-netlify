const simpleGit = require('simple-git');
const path = require('path');

// Fonction pour effectuer un commit et un push
const commitAndPush = async () => {
    const repoPath = 'C:\\Users\\Tokinantenaina\\Desktop\\api-screenshot-netlify';
    const git = simpleGit(repoPath);

    // Ajouter les fichiers au commit (vous pouvez personnaliser ceci selon vos besoins)
    await git.add('.');

    // Effectuer le commit avec un message spécifique
    const commitMessage = 'Votre message de commit';
    await git.commit(commitMessage);

    // Définir l'URL du dépôt distant
    const remoteUrl = 'https://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@github.com/Tokinantenaina-Nt/api-screenshot-netlify';

    // Définir les options pour le push
    const pushOptions = ['origin', 'main'];

    // Effectuer le push
    git.push(remoteUrl, 'main', pushOptions, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    });
};

module.exports = commitAndPush;
