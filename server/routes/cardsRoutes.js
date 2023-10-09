const cardsController = require('../controllers/cardsController')

module.exports = app =>{
    app.get("/api/cards", cardsController.findAllCards);
    app.get("/api/cards/:id", cardsController.findOneCard);
    app.post("/api/cards", cardsController.createCard);
    app.put("/api/cards/:id", cardsController.updateCard);
    app.delete("/api/cards/:id", cardsController.deleteCard);
}