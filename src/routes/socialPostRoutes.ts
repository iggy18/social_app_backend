import { Router } from "express";

const router = Router();

//social Post
//create
router.post('/', (req, res)=>{
    res.status(501).json({error: 'not implemented'});
});

//list
router.get('/', (req, res)=>{
    res.status(501).json({error: 'not implemented'})
})

//get a social post
router.get('/:id', (req, res) =>{
    const {id} = req.params;
    res.status(501).json({error: `not implemented: ${id}`})
})

//update social post
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    res.status(501).json({error: `not implemented: ${id}`})
})

//delete social post
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    res.status(501).json({error: `not implemented: ${id}`})
})

export default router;