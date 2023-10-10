const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    cardType: {
        type: String,
        required: [true, "Card Type is required."],
    },
    cardName: {
        type: String,
        required: [true, "Card Name is required"],
        minLength: [1, "Card Name must be at least 1 character long."]
    },
    cardCost: {
        type:String,
        required: [true, "Please specify the Mana Cost to play this card."]
    },
    isLegendary: {
        type: Boolean,
        required: [true, "Please specify whether this card is legendary or non-legendary."]
    },
    cardText: {
        type:String,
        required: [false]
    },
    cardRarity: {
        type: String,
        required: [true, "Please specify the Card's Rarity."]
    },
    cardExpansion: {
        type: String,
        required: [true, "Please specify the Expansion this card is from. (If you are not sure of the full Expansion/Set Name, please include the three-character abbreviation found on the bottom left of the card)."],
        minLength: [3, "The Expansion/Set Name must be at least three characters."]
    },
    cardPower: {
        type : Number
    },
    cardToughness: {
        type: Number
    },
    cardLoyalty: {
        type: Number
    }

},{timestamps: true})

module.exports = mongoose.model("CardSchema", CardSchema)