const Group = require('../models/Group');
const Profesor = require('../models/Profesor');

module.exports = {

    async addGroup(req, res){
        let { name, profesorUUID } = req.body;
        
        try {
            const profesor = await Profesor.findOne({ where: { uuid: profesorUUID } });
            if (profesor){
                Group.create({
                    name: name,
                    ProfesorId: profesor.id
                });

                return res.status(200).json({msg: 'Group created'});    
            }
            return res.status(400).json({ message: 'One of the parameters passed is not valid' }); 
        } catch (error) {
            return res.status(500).json({ error: error.message })  
        }
    },

    async showGroups(req, res){
        try {
            const groups = await Group.findAll();
            return res.status(200).json({groups: groups});
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async updateGroup(req, res){
        const { uuid } = req.params;
        const { name, profesorUUID} = req.body;
        console.log(uuid);
        console.log(name, profesorUUID);
        try {
            const profesor = await Profesor.findOne({ where: { uuid: profesorUUID } });
            if (profesor){
            await Group.update(
                {
                    name: name,
                    ProfesorId: profesor.id,
                },
                { where: { uuid: uuid } }
            )
            res.json({ msg: 'Group Updated' });
            }
            return res.status(400).json({ message: 'One of the parameters passed is not valid' }); 
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deleteGroup(req, res){
        const { uuid } = req.params;
        try {
            await Group.destroy({ where: { uuid: uuid }});
            res.json({ msg: 'Group Deleted' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}