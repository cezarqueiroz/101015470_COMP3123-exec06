const noteModel = require('../models/NotesModel.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const note_data = req.body;
    const note = new nodeModel(note_data);
    const newNote = note.save();
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    noteModel.find()
    res.status(200).send(employees);
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
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
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    noteModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((note) => {
            if (note) {
                res.status(200).send({
                    message: "note details updated successfully. ",
                    employee,
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
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    nodeModel.findByIdAndDelete(req.params.id)
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
