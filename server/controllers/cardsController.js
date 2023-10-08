const Card = require("../models/Card");

module.exports = {
    findAllCards:(req, res) => {
        Card.find()
            .then( allCards => res.json(allCards))
            .catch( err => res.status(400).json(err));

    },

    findOneCard:(req, res) => {
        Card.findById(req.params.id)
            .then( oneCard => res.json(oneCard))
            .catch( err => res.status(400).json(err));
    },

    createCard:(req, res) => {
        Card.create(req.body)
            .then(newCard => res.json(newCard))
            .catch( err => res.status(400).json(err));

    },

    updateCard:(req, res) => {
        Card.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then( updatedCard => res.json(updatedCard))
            .catch( err => res.status(400).json(err));
    },

    deleteCard:(req, res) => {
        Card.findByIdAndDelete(req.params.id)
            .then (deletedCard => res.json(deletedCard))
            .catch( err => res.status(400).json(err));
    }
}