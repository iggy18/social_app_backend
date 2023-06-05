import { Router } from "express";

const router = Router();

//USER
//create
router.post('/', (req, res)=>{
    res.status(501).json({error: 'not implemented'});
});

//list
router.get('/', (req, res)=>{
    res.status(501).json({error: 'not implemented'})
})

//get a user
router.get('/:id', (req, res) =>{
    const {id} = req.params;
    res.status(501).json({error: `not implemented: ${id}`})
})

//update user
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    res.status(501).json({error: `not implemented: ${id}`})
})

//delete user
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    res.status(501).json({error: `not implemented: ${id}`})
})

export default router;