const Student = require('../models/Student');
const Group = require('../models/Group');
const City = require('../models/City');

module.exports = {
    async addStudent(req, res){
        console.log(req.body);
        let { name, email, gender, dateBirth, age, groupUUID, cityUUID }= req.body;

        try {
            const group = await Group.findOne({ where: { uuid: groupUUID } });
            const city = await City.findOne({ where: { uuid: cityUUID } });
            if (group && city){
                Student.create({
                    name: name,
                    email: email,
                    gender: gender,
                    dateBirth: dateBirth,
                    age: parseInt(age),
                    CityId: city.id,
                    GroupId: group.id
                });

                return res.status(200).json({msg: 'Student created'});    
            }
            return res.status(400).json({ message: 'One the parameters passed is not valid' }); 
        } catch (error) {
            return res.status(500).json({ error: error.message })  
        }
    },

    async showStudents(req, res){
        try {
            students = await Students.findAll();
            res.json(students);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async updateStudent(req, res){
        const { uuid } = req.params;
        let { name, email, gender, dateBirth, age, groupUUID, cityUUID }= req.body;

        try {
            const group = await Group.findOne({ where: { uuid: groupUUID } });
            const city = await City.findOne({ where: { uuid: cityUUID } });
            if (group && city){
            await Student.update(
                {
                    name: name,
                    email: email,
                    gender: gender,
                    dateBirth: dateBirth,
                    CityId: city.id,
                    GroupId: group.id
                },
                { where: { uuid: uuid } }
            )
            res.json({ msg: 'Student Updated' });
            }
            return res.status(400).json({ message: 'One the parameters passed is not valid' }); 
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deleteStudent(req, res){
        const { uuid } = req.params;
        
        try {
            await Student.destroy({ where: { uuid: uuid }});
            res.json({ msg: 'Student Deleted' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}