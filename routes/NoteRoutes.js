const noteModel = require('../models/NotesModel');
const express = require("express");
const routes = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty POST"
        });
    }
    //TODO - Write your code here to save the note
    const note_data = req.body;
    try {
        const note = new noteModel(note_data);
        const newNote = note.save();
        res.status(201).send({
            message: "Note created successfully.",
            noteTitle: newNote.noteTitle,
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
   
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty GET"
        });
    }
    noteModel.find()
    .then((notes) => {
        res.status(200).send(notes);
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    noteModel.findById(req.params.noteId)
    .then((note) => {
        if (note) {
            res.status(200).send(note);
        } else {
            res.status(404).send({ message: "note not found" });
        }
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    noteModel.findByIdAndUpdate(req.params.noteId, req.body, { new: true })
        .then((note) => {
            if (note) {
                res.status(200).send({
                    message: "note details updated successfully. ",
                    noteTitle: note.noteTitle,
                });
            } else {
                res.status(404).send({ message: "note not found" });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    noteModel.findByIdAndDelete(req.params.noteId)
        .then((note) => {
            if (note) {
                res.status(200).send({
                    message: "note deleted successfully.",
                });
            } else {
                res.status(404).send({ message: "note not found for delete" });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
    //TODO - Write your code here to delete the note using noteid
});

module.exports = routes;
