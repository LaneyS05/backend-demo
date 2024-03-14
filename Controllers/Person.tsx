import { Request, Response } from 'express';
import Person, { IPerson } from '../Models/Person';

async function getAllPeople(req: Request, res: Response) {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting all people' });
  }
}

async function getPersonById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const person = await Person.findById(id);
    res.json(person);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting person' });
  }
}

async function createPerson(req: Request, res: Response) {
  try {
    const newPersonData: IPerson = req.body;
    const newPerson = new Person(newPersonData);
    await newPerson.save();
    res.status(201).json({ message: 'User created', person: newPerson });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating person' });
  }
}

async function deletePerson(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deletedPerson = await Person.findByIdAndDelete(id);
    res.json(deletedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting person' });
  }
}

async function updatePerson(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedPerson = await Person.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating person' });
  }
}

export {
  getAllPeople,
  getPersonById,
  createPerson,
  deletePerson,
  updatePerson,
};
