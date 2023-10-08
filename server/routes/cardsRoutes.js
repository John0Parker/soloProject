const cardsController = require('../controllers/cardsController')

module.exports = app =>{
    app.get("/api/cards", cardsController.findAllStores);
    app.get("/api/cards/:id", cardsController.findOneStore);
    app.post("/api/cards", cardsController.createStore);
    app.put("/api/cards/:id", cardsController.updateStore);
    app.delete("/api/cards/:id", cardsController.deleteStore);
}