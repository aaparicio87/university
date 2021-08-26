const Profesor = require('../models/Profesor');

module.exports = {
    async addProfesor(req, res){
        let { name }= req.body;

        try {
            await Profesor.create({name: name});
            return res.status(200).json({msg: 'Profesor created'});    
        } catch (error) {
            return res.status(500).json({ error: error.message })  
        }
    },

    async showProfesors(req, res){
        try {
            profesors = await Profesor.findAll();
            res.json(profesors);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async updateProfesor(req, res){
        const { uuid } = req.params;
        const { name } = req.body;

        try {
            await Profesor.update({ name: name }, { where: { uuid: uuid } });
            res.json({ msg: 'Profesor Updated' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deleteProfesor(req, res){
        const { uuid } = req.params;
        
        try {
            await Brands.destroy({ where: { uuid: uuid }});
            res.json({ msg: 'Profesor Deleted' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}