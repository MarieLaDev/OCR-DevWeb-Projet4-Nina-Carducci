// Importer le module Express
const express = require('express');
const path = require('path');

// Créer une application Express
const app = express();

// Définir le port sur lequel le serveur va écouter
const PORT = process.env.PORT || 3000;

// Configurer le dossier des fichiers statiques
app.use(express.static(path.join(__dirname)));

// Route principale pour servir 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});