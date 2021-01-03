const Project = require('../models/Project');

exports.create = async(req, res) => {
    const { id, name, priority, description, deliverydate } = req.body
    try {
       
        let newProject = await Project.create({
            id,
            name,
            priority,
            description,
            deliverydate,
        },{
            fields:['id','name','priority','description','deliverydate']
        });
        if (newProject) {
            return res.json({
                message: "Project created successfully",
                data: newProject
            })
        }

    } catch(e){
        console.log(e)
        res.status(500).json({
            message:'Something goes wrong',
            data:{}
        })

    }

}