"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PersonSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    favoriteColor: { type: String },
});
const Person = (0, mongoose_1.model)('Person', PersonSchema);
exports.default = Person;
