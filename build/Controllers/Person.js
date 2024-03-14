"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePerson = exports.deletePerson = exports.createPerson = exports.getPersonById = exports.getAllPeople = void 0;
const Person_1 = __importDefault(require("../Models/Person"));
function getAllPeople(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const people = yield Person_1.default.find();
            res.json(people);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error getting all people' });
        }
    });
}
exports.getAllPeople = getAllPeople;
function getPersonById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const person = yield Person_1.default.findById(id);
            res.json(person);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error getting person' });
        }
    });
}
exports.getPersonById = getPersonById;
function createPerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newPersonData = req.body;
            const newPerson = new Person_1.default(newPersonData);
            yield newPerson.save();
            res.status(201).json({ message: 'User created', person: newPerson });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error creating person' });
        }
    });
}
exports.createPerson = createPerson;
function deletePerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const deletedPerson = yield Person_1.default.findByIdAndDelete(id);
            res.json(deletedPerson);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error deleting person' });
        }
    });
}
exports.deletePerson = deletePerson;
function updatePerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedPerson = yield Person_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.json(updatedPerson);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error updating person' });
        }
    });
}
exports.updatePerson = updatePerson;
