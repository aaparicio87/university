const City = require('../models/City');

module.exports = {
    async addCity(req, res){
        let { name }= req.body;
        
        try {
            await City.create({ name:name });
            return res.status(200).json({msg: 'City created'});    
        } catch (error) {
            return res.status(500).json({ error: error.message })  
        }
    },

    async showCities(req, res){
        try {
            cities = await Citys.findAll();
            res.json(cities);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
    async updateCity(req, res){
        const { uuid } = req.params;
        const { name } = req.body;
        try {
            await City.update({ name: name }, { where: { uuid: uuid } });
            res.json({ msg: 'City Updated' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deleteCity(req, res){
        const { uuid } = req.params;
        try {
            await City.destroy({ where: { uuid: uuid }});
            res.json({ msg: 'City Deleted' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}