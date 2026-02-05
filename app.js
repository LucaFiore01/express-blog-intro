const express = require('express');
const app = express();
const port = 3000;

const posts = [
    {
        titolo: "Ciambellone - La ricetta classica",
        contenuto: "Il ciambellone è uno dei dolci più amati e tradizionali della cucina italiana. Morbido, profumato e perfetto per la colazione o la merenda. Questa ricetta semplice e genuina piacerà a tutta la famiglia.",
        immagine: "/images/ciambellone.jpeg",
        tags: ["dolci", "ricetta", "ciambellone", "tradizionale"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Cracker salati e croccanti arricchiti dalla barbabietola rossa. Un'alternativa gustosa e colorata ai classici cracker, perfetti come snack o per accompagnare formaggi e salumi.",
        immagine: "/images/cracker_barbabietola.jpeg",
        tags: ["ricetta", "crackers", "barbabietola", "snack"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Un dolce goloso e sfizioso: pane fritto ricoperto di zucchero. Ricetta semplice ma deliziosa, perfetta per chi ama i sapori dolci e croccanti. Un vero comfort food tradizionale.",
        immagine: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolci", "pane", "ricetta", "fritto"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "Un primo piatto elegante e saporito che combina la pasta con il delicato sapore della barbabietola. Ideale per un pranzo raffinato, ricco di colore e nutrienti.",
        immagine: "/images/pasta_barbabietola.jpeg",
        tags: ["pasta", "ricetta", "barbabietola", "piatti-principali"]
    },
    {
        titolo: "Torta paesana - Dolce tirolese",
        contenuto: "La torta paesana è un dolce tradizionale tirolese fatto con pane raffermo, cioccolato e pinoli. Un dolce rustico e genuino dal sapore antico, perfetto per le festività.",
        immagine: "/images/torta_paesana.jpeg",
        tags: ["torta", "dolce", "ricetta", "tirolese"]
    }
];

app.get('/', (req, res) => {
    res.send('Server del mio Blog')
})

app.get('/bacheca', (req, res) => {
    res.json(posts);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})