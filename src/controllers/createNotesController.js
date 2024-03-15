const User = require('../models/noteModel');


const controllers = {

    getUserNotes: async (req, res) => {
        try {
            const notes = await User.find();
            res.json(notes);
        } catch (error) {
            console.error("Error al traer las notas");
            res.status(500).json({ error: error.message });
        }
    }
}


module.exports = {
    controllers,
};