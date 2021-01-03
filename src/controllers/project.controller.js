const Project = require('../models/Project');
exports.update = async(req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      
        let projects = await Project.update(body,{where:{id}})
        res.json(projects)
    
    } catch(e){
        console.log(e)
        res.status(500).json({
            message:'Something goes wrong',
            data:{}
        })

    }

}

exports.remove = async(req, res) => {
    const id = req.params.id
    try {
        const projects= await Project.destroy({
            where:{
                id
            }
        })
        res.json(projects)
    
    } catch(e){
        console.log(e)
        res.status(500).json({
            message:'Something goes wrong',
            data:{}
        })

    }

}

exports.findOne = async(req, res) => {
    const id = req.params.id
    try {
        const projects= await Project.findOne({
            where:{
                id
            }
        })
        res.json(projects)
    
    } catch(e){
        console.log(e)
        res.status(500).json({
            message:'Something goes wrong',
            data:{}
        })

    }

}
exports.list = async(req, res) => {
    try {
        const projects= await Project.findAll();
        res.json(projects)
       
    

    } catch(e){
        console.log(e)
        res.status(500).json({
            message:'Something goes wrong',
            data:{}
        })

    }

}

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