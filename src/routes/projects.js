const Project = require('../models/Project');

const router = require('express').Router();
const {
create,
list,
update,
remove,
findOne,
} = require('../controllers/project.controller')

router.post("/", create);
router.get("/", list);
router.get("/:id", findOne)
router.delete("/:id", remove)
router.put("/:id", update)
//const obtener = require('../controllers/project.controller');

// router.post("/", async (req, res) => {
//     const { id, name, priority, description, deliverydate } = req.body
//     try {
       
//         let newProject = await Project.create({
//             id,
//             name,
//             priority,
//             description,
//             deliverydate,
//         },{
//             fields:['id','name','priority','description','deliverydate']
//         });
//         if (newProject) {
//             return res.json({
//                 message: "Project created successfully",
//                 data: newProject
//             })
//         }

//     } catch(e){
//         console.log(e)
//         res.status(500).json({
//             message:'Something goes wrong',
//             data:{}
//         })

//     }

// })


module.exports = router; 